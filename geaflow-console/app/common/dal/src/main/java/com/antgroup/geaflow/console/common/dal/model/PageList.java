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

package com.antgroup.geaflow.console.common.dal.model;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import java.util.List;
import java.util.function.Function;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class PageList<T> {

    private final List<T> list;

    private final long total;

    public PageList(List<T> data) {
        this(data, data.size());
    }

    public PageList(Page<T> page) {
        this(page.getRecords(), page.getTotal());
    }

    public <N> PageList<N> transform(Function<List<T>, List<N>> converter) {
        List<N> newList = converter.apply(this.list);
        return new PageList<>(newList, total);
    }

}
