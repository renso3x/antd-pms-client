import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'antd';
import { SettingFilled } from '@ant-design/icons';

import { Main } from '../components/Layout';
import { BreadCrumbs } from '../components/BreadCrumbs';
import { DateRanges } from '../components/Dates';
import { Reservation, Filter } from '../components/Calendar';
import { RoomTypeModalForm, RoomType } from '../components/Modals';

import { getAllRoomTypes } from '../actions/hotel';
import { IRootState } from '../reducers';

interface Props {
  getAllRoomTypes: () => void;
}

const _HotelSetup: React.FC<Props> = ({
  getAllRoomTypes,
}) => {
  const [state, setState] = useState({
    showRoomTypeModal: false
  });

  useEffect(() => {
    getAllRoomTypes();
  }, [])

  const handleShowForm = () => {
    setState({
      ...state,
      showRoomTypeModal: true
    })
  }

  const handleCreateRoomType = (values: RoomType) => {
    console.log('create a room type', values)
  }

  const handleCloseModal = (modal: string) => {
    setState({ ...state, [modal]: false })
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

const mapStateToProps = (state: IRootState) => {
  return {
    roomTypes: state.roomTypes,
  }
};

export const HotelSetup = connect(mapStateToProps, {
  getAllRoomTypes
})(_HotelSetup);