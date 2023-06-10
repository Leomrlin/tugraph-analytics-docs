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

package com.antgroup.geaflow.operator.impl.graph.traversal.dynamic;

import com.antgroup.geaflow.api.graph.traversal.IncVertexCentricTraversal;
import com.antgroup.geaflow.model.traversal.ITraversalRequest;
import com.antgroup.geaflow.utils.keygroup.KeyGroupAssignment;
import com.antgroup.geaflow.view.graph.GraphViewDesc;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class DynamicGraphVertexCentricTraversalStartByStreamOp<K, VV, EV, M, R> extends
    AbstractDynamicGraphVertexCentricTraversalOp<K, VV, EV, M, R> {

    private static final Logger LOGGER = LoggerFactory.getLogger(
        DynamicGraphVertexCentricTraversalStartByStreamOp.class);

    public DynamicGraphVertexCentricTraversalStartByStreamOp(
        GraphViewDesc graphViewDesc,
        IncVertexCentricTraversal<K, VV, EV, M, R> vcTraversal) {
        super(graphViewDesc, vcTraversal);
    }

    @Override
    public Iterator<ITraversalRequest<K>> getTraversalRequests() {
        List<ITraversalRequest<K>> currentTaskRequest = new ArrayList<>();
        int maxParallelism = graphViewDesc.getShardNum();
        for (ITraversalRequest<K> traversalRequest : traversalRequests) {
            int currentKeyGroup = KeyGroupAssignment.assignToKeyGroup(traversalRequest.getVId(),
                maxParallelism);
            if (currentKeyGroup >= keyGroup.getStartKeyGroup() && currentKeyGroup <= keyGroup.getEndKeyGroup()) {
                currentTaskRequest.add(traversalRequest);
            }
        }
        return currentTaskRequest.iterator();
    }
}
