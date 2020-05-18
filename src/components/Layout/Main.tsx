import React from 'react';
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DashboardOutlined,
  SettingFilled,
} from '@ant-design/icons';
import { RouteComponentProps, withRouter } from 'react-router';

const { Header, Sider, Content } = Layout;

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
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
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