import React, { useContext } from 'react';
import { Table, Divider, Popconfirm } from 'antd';

import { AmenitiesContext } from '../../context/amenities';

const RoomAmenitiesList = () => {
  const { amenities, handleDelete, handleEdit } = useContext(AmenitiesContext);

  const state = {
    dataSource: amenities.list,
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

export default RoomAmenitiesList;
