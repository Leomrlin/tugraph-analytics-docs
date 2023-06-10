/*
 * Copyright 2023 AntGroup CO., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 */

package com.antgroup.geaflow.dsl.optimize.rule;

import com.antgroup.geaflow.dsl.calcite.PathRecordType;
import com.antgroup.geaflow.dsl.rel.PathModify;
import com.antgroup.geaflow.dsl.rel.PathModify.PathModifyExpression;
import com.antgroup.geaflow.dsl.rel.match.MatchPathModify;
import com.antgroup.geaflow.dsl.rex.PathInputRef;
import com.antgroup.geaflow.dsl.rex.RexLambdaCall;
import com.antgroup.geaflow.dsl.rex.RexObjectConstruct;
import com.antgroup.geaflow.dsl.util.GQLRexUtil;
import com.google.common.collect.ImmutableList;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.apache.calcite.plan.RelOptRule;
import org.apache.calcite.plan.RelOptRuleCall;
import org.apache.calcite.rel.type.RelDataType;
import org.apache.calcite.rel.type.RelDataTypeField;
import org.apache.calcite.rex.RexBuilder;
import org.apache.calcite.rex.RexFieldAccess;
import org.apache.calcite.rex.RexNode;

public class PathModifyMergeRule extends RelOptRule {

    public static final PathModifyMergeRule INSTANCE = new PathModifyMergeRule();

    private PathModifyMergeRule() {
        super(operand(MatchPathModify.class,
            operand(MatchPathModify.class, any())));
    }

    @Override
    public void onMatch(RelOptRuleCall call) {
        MatchPathModify pathModify = call.rel(0);
        MatchPathModify inputPathModify = call.rel(1);
        // path modify with sub-query refer dependency can not merge as
        // the sub-query execute concurrently. See AbstractStepOperator for
        // more information about the sub-query.
        if (hasSubQueryDependency(pathModify, inputPathModify)) {
            return;
        }
        ImmutableList<PathModifyExpression> mergedExpressions =
            mergePathModifyExpression(call.builder().getRexBuilder(),
                pathModify.getExpressions(),
                inputPathModify.getExpressions());

        RelDataType mergedRelType = mergeRelType(pathModify.getRowType(),
            inputPathModify.getRowType());

        PathModify mergedPathModify = pathModify.copy(
            pathModify.getTraitSet(),
            inputPathModify.getInput(),
            mergedExpressions,
            mergedRelType);
        call.transformTo(mergedPathModify);
    }

    /**
     * Whether the pathModify has sub-query which referred the input path modify sub-query.
     * In this case, there is a sub-query dependency between the LogicalPathModify. So that
     * we cannot merge them.
     */
    private boolean hasSubQueryDependency(MatchPathModify inputPathModify, MatchPathModify pathModify) {
        Set<String> subQueryFields = new HashSet<>();

        for (PathModifyExpression expression : inputPathModify.getExpressions()) {
            String pathField = expression.getPathFieldName();
            RexObjectConstruct objectConstruct = expression.getObjectConstruct();

            for (int i = 0; i < objectConstruct.getOperands().size(); i++) {
                RexNode operand = objectConstruct.getOperands().get(i);
                if (GQLRexUtil.contain(operand, RexLambdaCall.class)) {
                    String field = objectConstruct.getVariableInfo().get(i).getName();
                    subQueryFields.add(pathField + "." + field);
                }
            }
        }

        for (PathModifyExpression expression : pathModify.getExpressions()) {
            List<RexNode> operands = expression.getObjectConstruct().getOperands();
            for (RexNode operand : operands) {
                List<RexLambdaCall> lambdaCalls = GQLRexUtil.collect(operand, node -> node instanceof RexLambdaCall);

                for (RexLambdaCall lambdaCall : lambdaCalls) {
                    List<RexFieldAccess> pathRefers = GQLRexUtil.collect(lambdaCall, node -> node instanceof RexFieldAccess);
                    boolean referSubQuery = pathRefers.stream().anyMatch(pathRef -> {
                        String pathField = ((PathInputRef) pathRef.getReferenceExpr()).getLabel()
                            + "." + pathRef.getField().getName();
                        return subQueryFields.contains(pathField);
                    });
                    if (referSubQuery) { // current path modify has referred the input's sub query.
                        return true;
                    }
                }
            }
        }
        return false;
    }


    private ImmutableList<PathModifyExpression> mergePathModifyExpression(
        RexBuilder builder,
        ImmutableList<PathModifyExpression> expressions,
        ImmutableList<PathModifyExpression> inputExpressions) {
        Map<Integer, PathModifyExpression> pathIndex2Expression = new LinkedHashMap<>();
        for (PathModifyExpression expression : expressions) {
            pathIndex2Expression.put(expression.getIndex(), expression);
        }

        List<PathModifyExpression> mergedExpressions = new ArrayList<>();

        for (PathModifyExpression inputExpression : inputExpressions) {
            PathModifyExpression expression = pathIndex2Expression.get(inputExpression.getIndex());
            if (expression != null) {
                RexObjectConstruct mergedObjConstruct =
                    expression.getObjectConstruct().merge(inputExpression.getObjectConstruct(),
                        expression.getIndex(), builder);
                PathModifyExpression mergedExpression = expression.copy(mergedObjConstruct);
                mergedExpressions.add(mergedExpression);
                pathIndex2Expression.remove(inputExpression.getIndex());
            } else {
                mergedExpressions.add(inputExpression);
            }
        }
        mergedExpressions.addAll(pathIndex2Expression.values());
        return ImmutableList.copyOf(mergedExpressions);
    }


    private RelDataType mergeRelType(RelDataType relType, RelDataType inputRelType) {
        Map<String, RelDataTypeField> name2Type = new LinkedHashMap<>();
        for (RelDataTypeField field : relType.getFieldList()) {
            name2Type.put(field.getName(), field);
        }
        List<RelDataTypeField> mergedFields = new ArrayList<>();
        for (RelDataTypeField inputField : inputRelType.getFieldList()) {
            RelDataTypeField currentField = name2Type.get(inputField.getName());
            if (currentField != null) {
                mergedFields.add(currentField); // use current field override the input field
                name2Type.remove(inputField.getName());
            } else {
                mergedFields.add(inputField);
            }
        }

        mergedFields.addAll(name2Type.values());
        return new PathRecordType(mergedFields);
    }
}
