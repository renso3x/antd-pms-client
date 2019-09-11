import React, { useContext } from 'react';
import { Row, Col, Button, Icon } from 'antd';

import MainLayout from '../../components/layout/main';
import RoomAmenitiesList from '../../components/extranet/roomAmenitiesList';
import RoomAmenitiesForm from '../../components/extranet/roomAmenitiesForm';

import { AmenitiesContext } from '../../context/amenities';

const RoomAmenities = () => {
  const { form, showForm, handleSave, handleUpdate, toggleForm } = useContext(
    AmenitiesContext
  );

  return (
    <MainLayout>
      <h1>Room Amenities</h1>
      <Row>
        <Col className="mb-16">
          <Button type="primary" onClick={toggleForm}>
            <Icon type="plus" />
            Create
          </Button>
        </Col>
      </Row>
      <RoomAmenitiesList />
      <RoomAmenitiesForm
        value={form}
        visible={showForm}
        onSubmit={handleSave}
        onUpdate={handleUpdate}
        onCancel={toggleForm}
      />
    </MainLayout>
  );
};

export default RoomAmenities;
