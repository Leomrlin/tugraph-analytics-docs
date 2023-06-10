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

package com.antgroup.geaflow.dsl.rel;

import com.antgroup.geaflow.dsl.common.exception.GeaFlowDSLException;
import com.google.common.collect.ImmutableList;
import java.util.List;
import org.apache.calcite.plan.RelOptCluster;
import org.apache.calcite.plan.RelTraitSet;
import org.apache.calcite.rel.RelNode;
import org.apache.calcite.rel.SingleRel;
import org.apache.calcite.rel.type.RelDataType;
import org.apache.calcite.sql.type.SqlTypeName;

public abstract class ConstructGraph extends SingleRel {

    protected final ImmutableList<String> labelNames;

    protected ConstructGraph(RelOptCluster cluster, RelTraitSet traits,
                             RelNode input, List<String> labelNames, RelDataType rowType) {
        super(cluster, traits, input);
        this.labelNames = ImmutableList.copyOf(labelNames);
        this.rowType = rowType;
        if (input.getRowType().getSqlTypeName() == SqlTypeName.PATH) {
            throw new GeaFlowDSLException("Illegal input type: "
                + input.getRowType().getSqlTypeName() + " for " + getRelTypeName());
        }
    }

    public ImmutableList<String> getLabelNames() {
        return labelNames;
    }
}
