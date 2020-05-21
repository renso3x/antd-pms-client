import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'antd';
import { SettingFilled } from '@ant-design/icons';

import { Main } from '../components/Layout';
import { BreadCrumbs } from '../components/BreadCrumbs';
import { DateRanges } from '../components/Dates';
import { Reservation, Filter } from '../components/Calendar';
import { RoomTypeModalForm } from '../components/Modals';

import { getAllRoomTypes, createRoomTypes, IRoomType } from '../actions/hotel';
import { IRootState } from '../reducers';

interface Props {
  roomTypes: {
    types: IRoomType[]
  }
  getAllRoomTypes: () => void;
  createRoomTypes: Function;
}

const _HotelSetup: React.FC<Props> = ({
  roomTypes: { types },
  getAllRoomTypes,
  createRoomTypes,
}) => {
  const [state, setState] = useState({
    showRoomTypeModal: false
  });

  useEffect(() => {
    getAllRoomTypes();
  }, [getAllRoomTypes]);

  const handleShowForm = () => {
    setState({
      ...state,
      showRoomTypeModal: true
    })
  }

  const handleCreateRoomType = (values: any) => {
    createRoomTypes(values);
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
          <Reservation
            roomTypes={types}
          />
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

const mapStateToProps = ({ roomTypes }: IRootState) => {
  return {
    roomTypes,
  }
};

export const HotelSetup = connect(mapStateToProps, {
  getAllRoomTypes,
  createRoomTypes
})(_HotelSetup);