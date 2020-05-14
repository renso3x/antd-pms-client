import styled from 'styled-components';
import { Card } from 'antd';

export const NumberCardStyles = styled(Card)`
  && {
    padding-left: 12px;
    padding-right: 12px;
    background: '#0092ff',

    .title {
      line-height: 16px;
      font-size: 16px;
      margin-bottom: 8px;
      height: 16px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .number {
      line-height: 32px;
      font-size: 24px;
      height: 32px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-bottom: 0;
    }
  }
`;