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

package com.antgroup.geaflow.dsl.udf.table.date;

import com.antgroup.geaflow.common.exception.GeaflowRuntimeException;
import com.antgroup.geaflow.dsl.common.function.Description;
import com.antgroup.geaflow.dsl.common.function.UDF;
import java.sql.Timestamp;
import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;

@Description(name = "_year", description = "Returns the year of date.")
public class Year extends UDF {

    private static final DateTimeFormatter DATE_FORMATTER = DateTimeFormat.forPattern("yyyy-MM-dd");
    private static final DateTimeFormatter DATE_TIME_FORMATTER = DateTimeFormat.forPattern(
        "yyyy-MM-dd HH:mm:ss");
    private final DateTime dateTime = new DateTime();

    public Integer eval(String dateString) {
        if (dateString == null) {
            return null;
        }
        DateTimeFormatter formatter = DATE_TIME_FORMATTER;
        if (dateString.length() <= 10) {
            formatter = DATE_FORMATTER;
        }
        try {
            return formatter.parseDateTime(dateString).getYear();
        } catch (Exception e) {
            throw new GeaflowRuntimeException(e);
        }
    }

    public Integer eval(Timestamp t) {
        if (t == null) {
            return null;
        }
        return dateTime.withMillis(t.getTime()).getYear();
    }

    public Integer eval(Long t) {
        if (t == null) {
            return null;
        }
        return dateTime.withMillis(t).getYear();
    }
}
