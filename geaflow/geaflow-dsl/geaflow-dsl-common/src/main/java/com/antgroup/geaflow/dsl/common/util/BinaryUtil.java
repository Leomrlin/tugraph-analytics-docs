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

package com.antgroup.geaflow.dsl.common.util;

import com.antgroup.geaflow.common.binary.BinaryString;
import java.util.HashMap;
import java.util.Map;

public class BinaryUtil {

    private static final ThreadLocal<Map<String, Object>> BINARY_LABEL_CACHE =
        ThreadLocal.withInitial(HashMap::new);

    public static Object toBinaryForString(Object o) {
        if (o instanceof BinaryString) {
            return o;
        }
        if (o instanceof String) {
            return BinaryString.fromString((String) o);
        }
        return o;
    }

    public static Object toBinaryLabel(String label) {
        Map<String, Object> labelCache = BINARY_LABEL_CACHE.get();
        return labelCache.computeIfAbsent(label, l -> toBinaryForString(label));
    }
}
