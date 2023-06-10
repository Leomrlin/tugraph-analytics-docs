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

package com.antgroup.geaflow.dsl.planner;

import java.io.Serializable;
import org.apache.calcite.rel.type.RelDataType;
import org.apache.calcite.rel.type.RelDataTypeFactory;
import org.apache.calcite.rel.type.RelDataTypeSystemImpl;
import org.apache.calcite.sql.type.SqlTypeName;

public class GQLRelDataTypeSystem extends RelDataTypeSystemImpl implements Serializable {

    private static final long serialVersionUID = -9093441501684237749L;

    @Override
    public int getMaxNumericScale() {
        return Integer.MAX_VALUE / 2;
    }

    @Override
    public int getMaxNumericPrecision() {
        return Integer.MAX_VALUE / 2;
    }

    public boolean shouldConvertRaggedUnionTypesToVarying() {
        return true;
    }

    @Override
    public RelDataType deriveAvgAggType(RelDataTypeFactory typeFactory,
                                                  RelDataType argumentType) {
        return typeFactory.createTypeWithNullability(
            typeFactory.createSqlType(SqlTypeName.DOUBLE), true);
    }
}
