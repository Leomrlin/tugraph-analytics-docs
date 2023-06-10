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

package com.antgroup.geaflow.store.rocksdb;

import org.testng.Assert;
import org.testng.annotations.Test;

public class RocksdbConfigKeysTest {

    @Test
    public void testChkPath() {
        String path1 = "0_chk4";
        String path2 = "51_chk4";
        String path3 = "111_chk4.tmp";

        Assert.assertEquals(RocksdbConfigKeys.getChkPathPrefix(path1), "0_chk");
        Assert.assertEquals(RocksdbConfigKeys.getChkPathPrefix(path2), "51_chk");
        Assert.assertEquals(RocksdbConfigKeys.getChkPathPrefix(path3), "111_chk");

        Assert.assertTrue(RocksdbConfigKeys.isChkPath(path1));
        Assert.assertTrue(RocksdbConfigKeys.isChkPath(path2));
        Assert.assertFalse(RocksdbConfigKeys.isChkPath(path3));
    }
}
