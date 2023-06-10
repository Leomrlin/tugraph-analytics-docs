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

package com.antgroup.geaflow.utils.keygroup;

public class DefaultKeyGroupAssigner implements IKeyGroupAssigner {

    private int maxPara;

    public DefaultKeyGroupAssigner(int maxPara) {
        this.maxPara = maxPara;
    }

    @Override
    public int getKeyGroupNumber() {
        return this.maxPara;
    }

    @Override
    public int assign(Object key) {
        if (key == null) {
            return -1;
        }
        return KeyGroupAssignment.assignToKeyGroup(key, maxPara);
    }
}
