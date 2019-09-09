import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import * as S from './styles';

import { removeToken } from '../../services/auth';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

function MainLayout({ children }) {
  const handleLogout = () => {
    removeToken();
    window.location = '/login';
  };

  return (
    <Layout>
      <Header className="header">
        <S.Logo />
        <div className="nav__menu">
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['dashboard']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="dashboard">
              <Link to="/">
                <Icon type="dashboard" />
                <span>Dashboard</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="appstore" />
                  <span>Property Setup</span>
                </span>
              }
            >
              <Menu.Item key="property">
                <Link to="/extranet/accomodation">
                  <Icon type="home" />
                  <span>Accomodation</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="amenities">
                <Icon type="thunderbolt" />
                <span>Room Amenities</span>
              </Menu.Item>
              <Menu.Item key="bed">
                <Icon type="thunderbolt" />
                <span>Bed Config</span>
              </Menu.Item>
              <Menu.Item key="types">
                <NavLink to="/extranet/property-types">
                  <Icon type="control" />
                  <span>Accomodation Types</span>
                </NavLink>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="accounts">
              <Icon type="team" />
              <span>Users</span>
            </Menu.Item>
            <Menu.Item key="team">
              <Icon type="team" />
              <span>Roles</span>
            </Menu.Item>
          </Menu>
        </div>
      </Header>

      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ background: '#fff', padding: 24 }}>{children}</div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default MainLayout;
