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

package com.antgroup.geaflow.console.biz.shared.convert;

import com.antgroup.geaflow.console.biz.shared.view.AuthorizationView;
import com.antgroup.geaflow.console.core.model.security.GeaflowAuthorization;
import org.springframework.stereotype.Component;

@Component
public class AuthorizationViewConverter extends IdViewConverter<GeaflowAuthorization, AuthorizationView> {

    @Override
    protected AuthorizationView modelToView(GeaflowAuthorization model) {
        AuthorizationView view = super.modelToView(model);
        view.setResourceType(model.getResourceType());
        view.setAuthorityType(model.getAuthorityType());
        view.setUserId(model.getUserId());
        view.setResourceId(model.getResourceId());
        return view;
    }

    @Override
    protected GeaflowAuthorization viewToModel(AuthorizationView view) {
        GeaflowAuthorization model = super.viewToModel(view);
        model.setResourceType(view.getResourceType());
        model.setAuthorityType(view.getAuthorityType());
        model.setUserId(view.getUserId());
        model.setResourceId(view.getResourceId());
        return model;
    }

    public GeaflowAuthorization convert(AuthorizationView view) {
        return viewToModel(view);
    }
}
