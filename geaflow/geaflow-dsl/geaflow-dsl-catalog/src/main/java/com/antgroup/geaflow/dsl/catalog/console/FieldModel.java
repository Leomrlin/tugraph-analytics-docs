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

package com.antgroup.geaflow.dsl.catalog.console;

public class FieldModel extends AbstractNameModel {

    private GeaFlowFieldType type;

    private GeaFlowFieldCategory category;

    public FieldModel(String name, String comment, GeaFlowFieldType type, GeaFlowFieldCategory category) {
        super(name, comment);
        this.type = type;
        this.category = category;
    }

    public GeaFlowFieldType getType() {
        return type;
    }

    public void setType(GeaFlowFieldType type) {
        this.type = type;
    }

    public GeaFlowFieldCategory getCategory() {
        return category;
    }

    public void setCategory(GeaFlowFieldCategory category) {
        this.category = category;
    }
}
