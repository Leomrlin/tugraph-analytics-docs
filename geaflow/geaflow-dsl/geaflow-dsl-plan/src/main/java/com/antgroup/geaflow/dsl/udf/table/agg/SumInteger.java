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

package com.antgroup.geaflow.dsl.udf.table.agg;

import com.antgroup.geaflow.dsl.common.function.Description;
import com.antgroup.geaflow.dsl.common.function.UDAF;
import com.antgroup.geaflow.dsl.udf.table.agg.SumInteger.Accumulator;
import java.io.Serializable;

@Description(name = "sum", description = "The sum function for double.")
public class SumInteger extends UDAF<Integer, Accumulator, Integer> {

    @Override
    public Accumulator createAccumulator() {
        return new Accumulator(0);
    }

    @Override
    public void accumulate(Accumulator accumulator, Integer input) {
        if (null != input) {
            accumulator.value += input;
        }
    }

    @Override
    public void merge(Accumulator accumulator, Iterable<Accumulator> its) {
        for (Accumulator toMerge : its) {
            accumulator.value += toMerge.value;
        }
    }

    @Override
    public void resetAccumulator(Accumulator accumulator) {
        accumulator.value = 0;
    }

    @Override
    public Integer getValue(Accumulator accumulator) {
        return accumulator.value;
    }

    public static class Accumulator implements Serializable {

        public Accumulator() {
        }

        public int value;

        public Accumulator(int value) {
            this.value = value;
        }
    }
}
