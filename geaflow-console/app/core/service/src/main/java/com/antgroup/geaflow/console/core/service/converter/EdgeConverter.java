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

package com.antgroup.geaflow.console.core.service.converter;

import com.antgroup.geaflow.console.common.dal.entity.EdgeEntity;
import com.antgroup.geaflow.console.core.model.data.GeaflowEdge;
import com.antgroup.geaflow.console.core.model.data.GeaflowEdge.Endpoint;
import com.antgroup.geaflow.console.core.model.data.GeaflowField;
import java.util.List;
import org.springframework.stereotype.Component;

@Component
public class EdgeConverter extends DataConverter<GeaflowEdge, EdgeEntity> {

    public GeaflowEdge convert(EdgeEntity entity, List<GeaflowField> fields, List<Endpoint> endpoints) {
        GeaflowEdge edge = entityToModel(entity);
        edge.addFields(fields);
        edge.addEndpoints(endpoints);
        return edge;
    }
}
