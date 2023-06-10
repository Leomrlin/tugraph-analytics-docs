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

package com.antgroup.geaflow.cluster.resourcemanager;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

public class ResourceSession implements Serializable {

    private final Map<WorkerInfo.WorkerId, WorkerInfo> workers = new HashMap<>();
    private final String id;

    public ResourceSession(String id) {
        this.id = id;
    }

    public String getId() {
        return this.id;
    }

    public Map<WorkerInfo.WorkerId, WorkerInfo> getWorkers() {
        return this.workers;
    }

    public void addWorker(WorkerInfo.WorkerId workerId, WorkerInfo worker) {
        this.workers.put(workerId, worker);
    }

    public boolean removeWorker(WorkerInfo.WorkerId workerId) {
        return this.workers.remove(workerId) != null;
    }

}
