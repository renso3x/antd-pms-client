import { Layout, Icon, Breadcrumb } from 'antd';
import styled from 'styled-components';

import './index.css';

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

  h1 {
    vertical-align: text-bottom;
    font-size: 16px;
    text-transform: uppercase;
    display: inline-block;
    font-weight: 700;
    color: #1890ff;
    white-space: nowrap;
    margin-bottom: 0;
    background-image: -webkit-gradient(
      linear,
      37.219838% 34.532506%,
      36.425669% 93.178216%,
      from(#29cdff),
      to(#0a60ff),
      color-stop(0.37, #148eff)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
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
    padding: 24px;
  }
`;

export const InnerContent = styled.div`
  background-color: #fff;
  padding: 24px;
`;

export const InnerBreadCrumb = styled(Breadcrumb)`
  margin-bottom: 24px;
`;
