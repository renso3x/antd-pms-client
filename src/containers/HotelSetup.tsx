import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'antd';
import { SettingFilled } from '@ant-design/icons';

import { Main } from '../components/Layout';
import { BreadCrumbs } from '../components/BreadCrumbs';
// import { DateRanges } from '../components/Dates';
import { Reservation, Filter } from '../components/Calendar';
import { RoomTypeModalForm, RatePlanModalForm } from '../components/Modals';

import {
  getAllRoomTypes,
  createRoomTypes,
  IRoomType,
  RatePlan as IRatePlan,
  createRatePlan
} from '../actions/hotel';
import { IRootState } from '../reducers';

interface Props {
  roomTypes: {
    types: IRoomType[]
  }
  getAllRoomTypes: () => void;
  createRoomTypes: Function;
}

type ModalType = 'showRoomTypeModal' | 'showRatePlanModal';

const _HotelSetup: React.FC<Props> = ({
  roomTypes: { types },
  getAllRoomTypes,
  createRoomTypes,
}) => {
  const [state, setState] = useState({
    showRoomTypeModal: false,
    showRatePlanModal: false,
    roomType: {
      name: '',
      description: '',
      rate: 0
    }
  });

  useEffect(() => {
    getAllRoomTypes();
  }, [getAllRoomTypes]);

  const handleShowForm = (roomType: any, modal: ModalType) => {
    setState({
      ...state,
      [modal]: true,
      roomType,
    });
  }

  const handleCreateRoomType = (values: any) => {
    createRoomTypes(values);
  }

  const handleCloseModal = () => {
    setState({ ...state, showRoomTypeModal: false, showRatePlanModal: false });
  }

  const handleCreatRatePlan = (values: IRatePlan) => {
    createRatePlan({
      ...values,
      roomType: state.roomType
    })
  }

  return (
    <Main>
      <BreadCrumbs icon={<SettingFilled />} text="Hotel Setup" />
      <Row gutter={[16, 16]}>
        <Col>
          {/* <DateRanges numberOfMonths={2} /> */}
          <Button type="primary" onClick={() => handleShowForm(null, 'showRoomTypeModal')}>Create Room Type</Button>
        </Col>
        <Col>
          <Filter />
          <Reservation
            roomTypes={types}
            showModalRatePlan={handleShowForm}
          />
        </Col>
      </Row>
      <RoomTypeModalForm
        isVisible={state.showRoomTypeModal}
        handleSubmit={handleCreateRoomType}
        handleCancel={handleCloseModal}
      />
      <RatePlanModalForm
        isVisible={state.showRatePlanModal}
        handleSubmit={handleCreatRatePlan}
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
  createRoomTypes,
})(_HotelSetup);