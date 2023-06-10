import React, { useEffect, useState, useRef } from "react";
import type { ActionType } from "@ant-design/pro-components";
import { ProTable } from "@ant-design/pro-components";
import {
  getApiTasks,
  getApiClusters,
  getApiVersions,
  getApiInstances,
} from "../../services/job-list";
import { find, isEmpty, omitBy } from "lodash";
import styles from "./index.module.less";

interface PluginPorps {
  redirectPath?: RedirectPath[];
}

interface RedirectPath {
  path: string;
  pathName: string;
}

export const JobList: React.FC<PluginPorps> = (props) => {
  const { redirectPath } = props;
  const redirectUrl = find(redirectPath, ["pathName", "作业详情"])?.path || "/";
  const redirectTable = find(redirectPath, ["pathName", "图计算"])?.path || "/";
  const [operationData, setOperationData] = useState([]);
  const [filterData, setFilterData] = useState({
    newCluster: {},
    newVersion: {},
    newInstance: {},
  });

  const handleQuery = async () => {
    const clusterData = await getApiClusters();
    const newCluster = {};
    clusterData.forEach((item) => (newCluster[item.id] = { text: item.name }));

    const versionData = await getApiVersions();
    const newVersion = {};
    versionData.forEach((item) => (newVersion[item.id] = { text: item.name }));

    const instanceData = await getApiInstances();
    const newInstance = {};
    instanceData.forEach(
      (item) => (newInstance[item.id] = { text: item.name })
    );

    setFilterData({ ...filterData, newCluster, newVersion, newInstance });
  };

  useEffect(() => {
    handleQuery();
  }, []);

  const handleOperation = (params?: any) => {
    const filterData = omitBy(params, (v) => isEmpty(v)) || {};
    getApiTasks(filterData).then((res) => {
      if (res) {
        setOperationData(res);
      }
    });
  };

  const actionRef = useRef<ActionType>();

  const columns = [
    {
      title: "任务名称",
      dataIndex: "name",
      key: "name",
      width: 150,
      render: (_, record: any) => (
        <span>
          <a href={`${redirectTable}?jobId=${record?.release?.job.id}`}>
            {record?.release?.job.name}
          </a>

          <br />
          {record?.comment && (
            <span style={{ fontSize: 12, color: "#ccc" }}>
              {record.comment}
            </span>
          )}
        </span>
      ),
    },

    {
      title: "作业Id",
      dataIndex: "jobId",
      key: "jobId",
      hideInSearch: true,
      render: (text: string, record: any) => (
        <a
          onClick={() => {
            window.location.href = `${redirectUrl}?uniqueId=${record?.release?.job.id}`;
          }}
        >
          {record?.id}
        </a>
      ),
    },
    {
      title: "作业类型",
      dataIndex: "jobType",
      key: "jobType",
      hideInSearch: true,
      render: (text: string, record: any) => (
        <span>{record?.release?.job.type}</span>
      ),
    },
    {
      title: "作业状态",
      dataIndex: "status",
      key: "status",
      valueType: "select",
      valueEnum: {
        CREATED: { text: "CREATED" },
        WAITING: { text: "WAITING" },
        STARTING: { text: "STARTING" },
        FAILED: { text: "FAILED" },
        RUNNING: { text: "RUNNING" },
        FINISHED: { text: "FINISHED" },
        STOPPED: { text: "STOPPED" },
      },
    },
    {
      title: "集群",
      dataIndex: "clusterId",
      key: "clusterId",
      valueType: "select",
      valueEnum: filterData.newCluster,
      render: (text: string, record: any) => (
        <span>{record?.release?.clusterName}</span>
      ),
    },
    {
      title: "版本",
      dataIndex: "versionTd",
      key: "versionTd",
      valueType: "select",
      valueEnum: filterData.newVersion,
      render: (text: string, record: any) => (
        <span>{record?.release?.versionName}</span>
      ),
    },
    {
      title: "实例",
      dataIndex: "instanceId",
      key: "instanceId",
      valueType: "select",
      valueEnum: filterData.newInstance,
      render: (text: string, record: any) => (
        <span>{record?.release?.job?.instanceName}</span>
      ),
    },
    {
      title: "操作人",
      key: "creatorName",
      hideInSearch: true,
      render: (_, record: any) => (
        <span>
          创建人：{record.creatorName} <br />
          {record?.modifierName && <span>修改人：{record.modifierName}</span>}
        </span>
      ),
    },
    {
      title: "操作时间",
      key: "createTime",
      width: 250,
      hideInSearch: true,
      render: (_, record: any) => (
        <span>
          创建时间：{record.createTime} <br />
          {record?.modifyTime && <span>修改时间：{record.modifyTime}</span>}
        </span>
      ),
    },
  ];

  return (
    <div className={styles["crowd-job"]}>
      <ProTable
        columns={columns}
        actionRef={actionRef}
        cardBordered
        scroll={{ x: 1000 }}
        dataSource={operationData}
        request={async (params = {}) => {
          handleOperation(params);
        }}
        editable={{
          type: "multiple",
        }}
        options={false}
        rowKey="id"
        search={{
          labelWidth: "auto",
        }}
        dateFormatter="string"
        headerTitle="作业列表"
      />
    </div>
  );
};
