import { Layout, Icon, Breadcrumb } from 'antd';
import styled from 'styled-components';

import './index.css';

const { Content } = Layout;

export const Logo = styled.div`
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
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

export const MainSection = styled(Content)`
  && {
    background-color: #fff;
    padding: 24px;
  }
`;

export const InnerContent = styled.div`
  padding: 24px;
`;

export const InnerBreadCrumb = styled(Breadcrumb)`
  margin-bottom: 24px;
`;
