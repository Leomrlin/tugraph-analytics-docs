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

package com.antgroup.geaflow.dsl.common.data;

import java.io.Serializable;

public interface StepRecord extends Serializable {

    StepRecordType getType();

    enum StepRecordType {

        /**
         * Represent a vertex.
         */
        VERTEX,

        /**
         * Represent an edge group of the vertex neighbor edges.
         */
        EDGE_GROUP,

        /**
         * Represent the end of data stream.
         */
        EOD,

        /**
         * Represent the result value for sub-query.
         */
        SINGLE_VALUE,

        /**
         * Represent a row.
         */
        ROW,

        /**
         * Represent a record with key.
         */
        KEY_RECORD
    }
}
