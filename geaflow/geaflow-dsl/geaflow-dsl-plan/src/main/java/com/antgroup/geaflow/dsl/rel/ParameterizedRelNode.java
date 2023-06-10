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

import org.apache.calcite.plan.RelOptCluster;
import org.apache.calcite.plan.RelTraitSet;
import org.apache.calcite.rel.BiRel;
import org.apache.calcite.rel.RelNode;
import org.apache.calcite.rel.type.RelDataType;

public abstract class ParameterizedRelNode extends BiRel {

    public ParameterizedRelNode(RelOptCluster cluster, RelTraitSet traitSet,
                                RelNode parameter, RelNode query) {
        super(cluster, traitSet, parameter, query);
    }

    public RelNode getParameterNode() {
        return getLeft();
    }

    public RelNode getQueryNode() {
        return getRight();
    }

    @Override
    protected RelDataType deriveRowType() {
        return getQueryNode().getRowType();
    }


}
