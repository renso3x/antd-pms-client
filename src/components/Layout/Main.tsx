import React from 'react';
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DashboardOutlined,
  SettingFilled,
  UserOutlined
} from '@ant-design/icons';
import { RouteComponentProps, withRouter } from 'react-router';
import { removeToken } from '../../actions/auth';
import { NavStyles } from './style';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

interface Props {
  children: React.ReactNode;
  history?: any;
  location?: any;
}

class _Main extends React.Component<Props> {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleRoute = (to: string) => this.props.history.push(to);

  handleLogout = () => {
    removeToken();
    this.props.history.push('/login');
  }

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{
            flex: '0 0 256px',
            maxWidth: '256px',
            minWidth: '256px',
            width: '256px'
          }}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['/']}
            selectedKeys={[this.props.location.pathname]}
          >
            <Menu.Item key="/" icon={<DashboardOutlined />} onClick={() => this.handleRoute('/')}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="/hotel-setup" icon={<SettingFilled />} onClick={() => this.handleRoute('/hotel-setup')}>
              Hotel Setup
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <NavStyles>
              <Menu mode="horizontal">
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: this.toggle,
                })}
                <SubMenu icon={<UserOutlined />} className="right-menu">
                  <Menu.Item key="setting:3" onClick={this.handleLogout}>Logout</Menu.Item>
                </SubMenu>
              </Menu>
            </NavStyles>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              height: '100vh'
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export const Main = withRouter(connect<{}, {}, Props & RouteComponentProps>(null)(_Main));