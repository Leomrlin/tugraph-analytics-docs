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

package com.antgroup.geaflow.state;

/**
 * The static graph state is the interface controlling
 * static vertex/edge or one degree subgraph.
 * Static graph is an intact graph with only one snapshot
 * comparing to the {@link DynamicGraphState}.
 */
public interface StaticGraphState<K, VV, EV> {

    /**
     * Returns the static vertex handler.
     */
    StaticVertexState<K, VV, EV> V();

    /**
     * Returns the static edge handler.
     */
    StaticEdgeState<K, VV, EV> E();

    /**
     * Returns the one degree handler.
     */
    StaticOneDegreeGraphState<K, VV, EV> VE();
}
