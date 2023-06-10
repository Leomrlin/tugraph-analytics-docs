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

package com.antgroup.geaflow.store.memory.csr.vertex.type;

import com.antgroup.geaflow.model.graph.IGraphElementWithLabelField;
import com.antgroup.geaflow.model.graph.IGraphElementWithTimeField;
import com.antgroup.geaflow.model.graph.vertex.IVertex;
import com.antgroup.geaflow.model.graph.vertex.impl.ValueLabelTimeVertex;

public class ValueLabelTimeVertexArray<K> extends ValueVertexArray<K> {

    private String[] labels;
    private long[] times;

    public void init(int capacity) {
        super.init(capacity);
        labels = new String[capacity];
        times = new long[capacity];
    }

    @Override
    public IVertex<K, Object> getVertex(K key, int pos) {
        return containsVertex(pos)
               ? new ValueLabelTimeVertex<>(key, getValue(pos), labels[pos], times[pos]) : null;
    }

    @Override
    public void set(int pos, IVertex<K, Object> vertex) {
        super.set(pos, vertex);
        if (vertex != null) {
            labels[pos] = ((IGraphElementWithLabelField) vertex).getLabel().intern();
            times[pos] = ((IGraphElementWithTimeField) vertex).getTime();
        }
    }

    @Override
    public void drop() {
        super.drop();
        labels = null;
        times = null;
    }

}
