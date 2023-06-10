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

package com.antgroup.geaflow.api.pdata.stream;

import com.antgroup.geaflow.common.encoder.IEncoder;

import java.util.Map;

public interface PUnionStream<T> extends PStream<T> {

    @Override
    PUnionStream<T> withConfig(Map map);

    @Override
    PUnionStream<T> withConfig(String key, String value);

    @Override
    PUnionStream<T> withName(String name);

    @Override
    PUnionStream<T> withParallelism(int parallelism);

    PUnionStream<T> withEncoder(IEncoder<T> encoder);

}
