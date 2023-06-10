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

package com.antgroup.geaflow.dsl.connector.api.serde;

import com.antgroup.geaflow.common.config.Configuration;
import com.antgroup.geaflow.dsl.common.data.Row;
import com.antgroup.geaflow.dsl.common.types.StructType;
import com.antgroup.geaflow.dsl.connector.api.TableSource;
import java.io.Serializable;
import java.util.List;

/**
 * The deserializer interface for the {@link TableSource} to
 * convert the records fetched from the source to list of {@link Row}.
 */
public interface TableDeserializer<IN> extends Serializable {

    /**
     * Init method for deserializer.
     * @param conf The configuration of the table source.
     * @param schema The schema of the table source.
     */
    void init(Configuration conf, StructType schema);

    /**
     * Returns the deserialized rows for the input record.
     */
    List<Row> deserialize(IN record);
}
