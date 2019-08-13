import { Layout, Icon } from 'antd';
import styled from 'styled-components';

const { Content } = Layout;

export const FullLayout = styled(Layout)`
  && {
    height: 100vh;
  }
`;

export const Logo = styled.div`
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
`;

export const HeaderContent = styled.div`
  position: relative;
  height: 64px;
  padding: 0;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  flex-direction: 'row';
`;

export const StyledIcon = styled(Icon)`
  && {
    height: 64px;
    padding: 22px 24px;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s, padding 0s;
  }
`;

export const HeaderRight = styled.div`
  && {
    float: right;
  }
`;

export const HeaderIcon = styled(StyledIcon)`
  && {
    font-size: 16px;
  }
`;

export const MainContent = styled(Content)`
  && {
    margin: 24px 16px;
    padding: 24px;
    background: #fff;
    min-height: 280px;
  }
`;
