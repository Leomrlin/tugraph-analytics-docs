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

package com.antgroup.geaflow.common.utils;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import java.lang.reflect.Type;
import java.util.Map;

public class GsonUtil {

    private static final Type TYPE = new TypeToken<Map<String, String>>(){}.getType();

    public static Map<String, String> parse(String json) {
        Gson gson = new Gson();
        return gson.fromJson(json, TYPE);
    }

    public static String toJson(Map<String, String> config) {
        Gson gson = new Gson();
        return gson.toJson(config, TYPE);
    }

}
