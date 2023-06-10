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

package com.antgroup.geaflow.state.graph.encoder;

import com.antgroup.geaflow.common.tuple.Tuple;
import com.antgroup.geaflow.model.graph.vertex.IVertex;

public interface IVertexKVEncoder<K, VV> {

    Tuple<byte[], byte[]> format(IVertex<K, VV> vertexData);

    IVertex<K, VV> getVertex(byte[] key, byte[] value);

    K getVertexID(byte[] key);

    IBytesEncoder getBytesEncoder();
}
