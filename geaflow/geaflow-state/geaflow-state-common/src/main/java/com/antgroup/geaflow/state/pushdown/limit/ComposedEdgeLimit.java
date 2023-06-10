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

package com.antgroup.geaflow.state.pushdown.limit;

public class ComposedEdgeLimit implements IEdgeLimit {

    private long outEdgeLimit;
    private long inEdgeLimit;

    public ComposedEdgeLimit(long outEdgeLimit, long inEdgeLimit) {
        this.outEdgeLimit = outEdgeLimit;
        this.inEdgeLimit = inEdgeLimit;
    }

    @Override
    public long inEdgeLimit() {
        return this.inEdgeLimit;
    }

    @Override
    public long outEdgeLimit() {
        return this.outEdgeLimit;
    }

    @Override
    public LimitType limitType() {
        return LimitType.COMPOSED;
    }

}
