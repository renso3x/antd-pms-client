import * as React from 'react';
import _ from 'lodash';
import moment from 'moment';
import { Card } from 'antd';
import {
  CloseCircleTwoTone,
  CheckCircleTwoTone
} from '@ant-design/icons';

import { TableStyle } from './styles';

export interface Props {
  startDate?: Date
}

export const Reservation: React.SFC<Props> = () => {
  const TABLE_COLUMNS = _.times(30, (n: number) =>  moment().add(n, 'days'))

  return (
    <TableStyle>
      <Card>
        <table className="table table-striped table-bordered table-sm rsvp-horizontal">
          <thead>
            <tr>
              <th scope="col" className="th-col">Room Types</th>
              {TABLE_COLUMNS.map(w => {
                return (<th scope="col" className="th-col">{moment(w, "DD-MM-YYYY").format('dd D')}</th>)
              })}
            </tr>
            {_.times(10, (n: number) => {
              return (
                <tr>
                  <td>Room {n}</td>
                  { _.times(30, (n: number) => {
                    let icon = <CloseCircleTwoTone twoToneColor="red" />;
                    if (n % 2 === 0) {
                      icon = <CheckCircleTwoTone twoToneColor="green" />;
                    }
                    return <td>{icon}</td>
                  })}
                </tr>
              )
            })}
          </thead>
        </table>
      </Card>
    </TableStyle>
  );
}
