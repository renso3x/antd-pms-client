import React from 'react';
import { Row, Col } from 'antd';
import {
  DashboardOutlined,
} from '@ant-design/icons';

import { Main } from '../components/Layout';
import { NumberCard } from '../components/NumberCard';
import { BreadCrumbs } from '../components/BreadCrumbs';

export const Dashboard = () => {
  return (
    <Main>
      <BreadCrumbs icon={<DashboardOutlined />} text="Dashboard" />
      <Row gutter={16}>
        <Col className="gutter-row" span={8}>
          <NumberCard
            title="ARRIVALS"
            number={5}
          />
        </Col>
        <Col className="gutter-row" span={8}>
          <NumberCard
            title="DEPARTURES"
            number={2}
          />
        </Col>
        <Col className="gutter-row" span={8}>
          <NumberCard
            title="ROOMS BOOKED"
            number={100}
          />
        </Col>
      </Row>
    </Main>
  )
}
