import React, { useContext } from 'react';
import { Row, Col, Button, Icon } from 'antd';

import { MainLayout } from '../../components/layout';
import BedConfigurationList from '../../components/extranet/bedConfigurationList';
import BedForm from '../../components/extranet/bedForm';
import { BedConfigContext } from '../../context/bedConfig';

const BedConfiguration = () => {
  const {
    name,
    showBedForm,
    toggleForm,
    handleSave,
    handleUpdate
  } = useContext(BedConfigContext);

  return (
    <MainLayout>
      <h1>Bed Configuration Management</h1>
      <Row>
        <Col className="mb-16">
          <Button type="primary" onClick={toggleForm}>
            <Icon type="plus" />
            Create
          </Button>
        </Col>
      </Row>
      <BedConfigurationList />
      <BedForm
        value={name}
        visible={showBedForm}
        onSubmit={handleSave}
        onCancel={toggleForm}
      />
    </MainLayout>
  );
};

export default BedConfiguration;
