import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import * as S from './styles';

import { removeToken } from '../../services/auth';

const { Header, Sider } = Layout;

class MainLayout extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  handleLogout = () => {
    removeToken();
    window.location = '/login';
  };

  render() {
    const props = this.props;
    return (
      <S.FullLayout style={{ height: '100vh' }}>
        <Sider
          width={200}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <S.Logo />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']}>
            <Menu.Item key="dashboard">
              <Icon type="dashboard" />
              <span>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="property">
              <Icon type="home" />
              <span>Properties</span>
            </Menu.Item>
            <Menu.Item key="feature">
              <Icon type="thunderbolt" />
              <span>Features</span>
            </Menu.Item>
            <Menu.Item key="types">
              <Icon type="control" />
              <span>Types</span>
            </Menu.Item>
            <Menu.Item key="team">
              <Icon type="team" />
              <span>Users</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <S.HeaderContent>
              <S.StyledIcon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
              <S.HeaderRight>
                <S.HeaderIcon type="logout" onClick={this.handleLogout} />
              </S.HeaderRight>
            </S.HeaderContent>
          </Header>
          <S.MainContent>{props.children}</S.MainContent>
        </Layout>
      </S.FullLayout>
    );
  }
}

export default MainLayout;
