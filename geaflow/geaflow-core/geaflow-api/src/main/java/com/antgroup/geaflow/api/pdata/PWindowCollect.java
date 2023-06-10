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

package com.antgroup.geaflow.api.pdata;

import com.antgroup.geaflow.api.pdata.base.PAction;
import java.util.Map;

public interface PWindowCollect<R> extends PAction  {

    @Override
    PWindowCollect<R> withParallelism(int parallelism);

    @Override
    PWindowCollect<R> withName(String name);

    @Override
    PWindowCollect<R> withConfig(Map map);

    @Override
    PWindowCollect<R> withConfig(String key, String value);

}
