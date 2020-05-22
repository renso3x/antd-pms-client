import * as React from 'react';
import _ from 'lodash';
import moment from 'moment';
import { Card, Button } from 'antd';
import {
  CloseCircleTwoTone,
  CheckCircleTwoTone,
  PlusOutlined,
} from '@ant-design/icons';
import { IRoomType, RatePlan } from '../../actions/hotel';

import { TableStyle } from './styles';

export interface Props {
  startDate?: Date;
  roomTypes: IRoomType[];
  showModalRatePlan: (roomType: IRoomType | null, modal: 'showRoomTypeModal' | 'showRatePlanModal') => void;
}

export const Reservation: React.SFC<Props> = ({
  roomTypes,
  showModalRatePlan
}) => {
  const TABLE_COLUMNS = _.times(30, (n: number) =>  moment().add(n, 'days'))

  return (
    <TableStyle>
      <Card>
        <table className="table table-striped table-bordered table-sm rsvp-horizontal">
          <thead>
            <tr>
              <th scope="col" className="th-col">
                Room Types
              </th>
              {TABLE_COLUMNS.map(w => {
                return (<th scope="col" className="th-col">{moment(w, "DD-MM-YYYY").format('dd D')}</th>)
              })}
            </tr>
            {roomTypes.length && roomTypes.map((type: IRoomType) => {
              return [
                <tr key={type.id}>
                  <td>
                    {type.name}
                    <Button
                      size="small"
                      type="primary"
                      shape="circle"
                      icon={<PlusOutlined />}
                      onClick={() => type && showModalRatePlan(type, 'showRatePlanModal')}
                    />
                  </td>
                </tr>,
                  type.rateplans && type.rateplans.map((rate: RatePlan) => (
                  <tr key={rate.id}>
                    <td>
                      {rate.name}
                    </td>
                    { _.times(30, (n: number) => {
                      let icon = <CloseCircleTwoTone twoToneColor="red" />;
                      if (n % 2 === 0) {
                        icon = <CheckCircleTwoTone twoToneColor="green" />;
                      }
                      return <td>{icon}</td>
                    })}
                  </tr>
                ))
              ]
            })}
          </thead>
        </table>
      </Card>
    </TableStyle>
  );
}
