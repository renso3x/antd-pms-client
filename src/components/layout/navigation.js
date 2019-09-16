import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

import * as S from './styles';

import { removeToken } from '../../services/auth';

const { Header } = Layout;
const { SubMenu } = Menu;

const Navigation = () => {
  const handleLogout = () => {
    removeToken();
    window.location = '/login';
  };

  return (
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
              <Link to="/extranet/room-amenities">
                <Icon type="thunderbolt" />
                <span>Room Amenities</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="bed">
              <Link to="/extranet/bed-configuration">
                <Icon type="thunderbolt" />
                <span>Bed Config</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="types">
              <NavLink to="/extranet/property-types">
                <Icon type="control" />
                <span>Accomodation Types</span>
              </NavLink>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="accounts">
            <NavLink to="/extranet/user-management">
              <Icon type="team" />
              <span>Users</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </div>
    </Header>
  );
};

export default Navigation;
