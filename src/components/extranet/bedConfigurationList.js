import React, { useContext } from 'react';
import { Table, Divider, Popconfirm } from 'antd';

import { BedConfigContext } from '../../context/bedConfig';

const BedConfigurationList = () => {
  const { bedConfig, handleDelete, handleEdit } = useContext(BedConfigContext);

  const state = {
    dataSource: bedConfig.list,
    tableColumns: [
      {
        title: 'Type',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <span>
            <a onClick={() => handleEdit(record)}>Edit</a>
            <Divider type="vertical" />
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDelete(record)}
            >
              <a>Delete</a>
            </Popconfirm>
          </span>
        )
      }
    ]
  };

  return (
    <Table
      rowKey={record => record._id}
      bordered
      dataSource={state.dataSource}
      columns={state.tableColumns}
    />
  );
};

export default BedConfigurationList;
