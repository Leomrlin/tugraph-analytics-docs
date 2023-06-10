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

package com.antgroup.geaflow.cluster.response;

import java.util.List;

public interface IResult<R> {

    /**
     * Returns id.
     */
    int getId();

    /**
     * Returns the response.
     */
    List<R> getResponse();

    /**
     * Returns the response type.
     */
    ResponseType getType();

    enum ResponseType {
        /**
         * Response from shuffle.
         */
        SHARD,
        /**
         * Response from collect directly.
         */
        COLLECTION
    }
}
