import React, { useState } from 'react';
import { Row, Col, Button } from 'antd';
import { SettingFilled } from '@ant-design/icons';

import { Main } from '../components/Layout';
import { BreadCrumbs } from '../components/BreadCrumbs';
import { DateRanges } from '../components/Dates';
import { Reservation, Filter } from '../components/Calendar';
import { RoomTypeModalForm, RoomType } from '../components/Modals';


export const HotelSetup = () => {
  const [state, setState] = useState({
    showRoomTypeModal: false
  });


  const handleShowForm = () => {
    setState({
      ...state,
      showRoomTypeModal: true
    })
    console.log('create room type modal');
  }

  const handleCreateRoomType = (values: RoomType) => {
    console.log('create a room type', values)
  }

  const handleCloseModal = (modal: string) => {
    setState({
      ...state,
      [modal]: false
    })
  }

  return (
    <Main>
      <BreadCrumbs icon={<SettingFilled />} text="Hotel Setup" />
      <Row gutter={[16, 16]}>
        <Col>
          {/* <DateRanges numberOfMonths={2} /> */}
          <Button type="primary" onClick={handleShowForm}>Create Room Type</Button>
        </Col>
        <Col>
          <Filter />
          <Reservation />
        </Col>
      </Row>
      <RoomTypeModalForm
        isVisible={state.showRoomTypeModal}
        handleSubmit={handleCreateRoomType}
        handleCancel={handleCloseModal}
      />
    </Main>
  )
}
