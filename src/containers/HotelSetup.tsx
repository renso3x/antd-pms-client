import React from 'react';
import { Row, Col } from 'antd';
import { SettingFilled } from '@ant-design/icons';

import { Main } from '../components/Layout';
import { BreadCrumbs } from '../components/BreadCrumbs';
import { DateRanges } from '../components/Dates';
import { Reservation, Filter } from '../components/Calendar';


export const HotelSetup = () => {
  return (
    <Main>
      <BreadCrumbs icon={<SettingFilled />} text="Hotel Setup" />
      <Row gutter={[16, 16]}>
        <Col>
          <DateRanges numberOfMonths={2} />
        </Col>
        <Col>
          <Filter />
          <Reservation />
        </Col>
      </Row>
    </Main>
  )
}
