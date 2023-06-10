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

package com.antgroup.geaflow.dsl.runtime.function.table.order;

import com.antgroup.geaflow.dsl.runtime.expression.Expression;
import java.io.Serializable;

public class OrderByField implements Serializable {

    public Expression expression;

    public ORDER order;

    public enum ORDER {

        ASC(1),

        DESC(-1);

        public final int value;

        ORDER(int value) {
            this.value = value;
        }
    }

    public OrderByField copy(Expression expression) {
        OrderByField field = new OrderByField();
        field.expression = expression;
        field.order = order;
        return field;
    }
}
