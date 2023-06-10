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

package com.antgroup.geaflow.dsl.runtime.plan;

import com.antgroup.geaflow.dsl.rel.ParameterizedRelNode;
import com.antgroup.geaflow.dsl.runtime.QueryContext;
import com.antgroup.geaflow.dsl.runtime.RDataView;
import com.antgroup.geaflow.dsl.runtime.RuntimeTable;
import java.util.List;
import org.apache.calcite.plan.RelOptCluster;
import org.apache.calcite.plan.RelTraitSet;
import org.apache.calcite.rel.RelNode;

public class PhysicParameterizedRelNode extends ParameterizedRelNode implements PhysicRelNode<RDataView> {

    public PhysicParameterizedRelNode(RelOptCluster cluster,
                                      RelTraitSet traitSet,
                                      RelNode parameter, RelNode query) {
        super(cluster, traitSet, parameter, query);
    }

    @Override
    public PhysicParameterizedRelNode copy(RelTraitSet traitSet, List<RelNode> inputs) {
        assert inputs.size() == 2;
        return new PhysicParameterizedRelNode(getCluster(), traitSet, inputs.get(0), inputs.get(1));
    }

    @SuppressWarnings("unchecked")
    @Override
    public RDataView translate(QueryContext context) {
        RuntimeTable requestTable = ((PhysicRelNode<RuntimeTable>) getParameterNode()).translate(context);
        RuntimeTable preRequestTable = context.setRequestTable(requestTable);

        RDataView dataView = ((PhysicRelNode<RDataView>) getQueryNode()).translate(context);
        context.setRequestTable(preRequestTable);

        return dataView;
    }

    @Override
    public String showSQL() {
        return null;
    }
}
