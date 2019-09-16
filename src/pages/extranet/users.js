import React, { useContext } from 'react';
import { Row, Col, Button, Icon } from 'antd';

import MainLayout from '../../components/layout/main';
import UserList from '../../components/extranet/userList';
// import UserManagementForm from '../../components/extranet/userManagementForm';

// import { AmenitiesContext } from '../../context/amenities';

const UserManagement = () => {
  //   const { form, showForm, handleSave, handleUpdate, toggleForm } = useContext();
  //  AmenitiesContext

  return (
    <MainLayout>
      <h1>User Management</h1>
      <Row>
        <Col className="mb-16">
          <Button type="primary" onClick={() => {}}>
            <Icon type="plus" />
            Create
          </Button>
        </Col>
      </Row>
      <UserList />
      {/* <UserManagementForm
        value={form}
        visible={showForm}
        onSubmit={handleSave}
        onUpdate={handleUpdate}
        onCancel={toggleForm}
      /> */}
    </MainLayout>
  );
};

export default UserManagement;
