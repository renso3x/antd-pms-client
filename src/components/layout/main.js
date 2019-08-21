import React, { Component } from 'react';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import * as S from './styles';

import { removeToken } from '../../services/auth';

const { Header, Sider } = Layout;
const { SubMenu } = Menu;

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
      <S.FullLayout>
        <Sider
          width={256}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <S.Logo />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']}>
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
              <span>User Management</span>
            </Menu.Item>
            <Menu.Item key="team">
              <Icon type="team" />
              <span>Manage Roles</span>
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

          <S.MainSection>
            <S.InnerBreadCrumb>
              <Breadcrumb.Item href="">
                <Icon type="home" />
              </Breadcrumb.Item>
              <Breadcrumb.Item href="">
                <span>Property List</span>
              </Breadcrumb.Item>
            </S.InnerBreadCrumb>
            <S.InnerContent>{props.children}</S.InnerContent>
          </S.MainSection>
        </Layout>
      </S.FullLayout>
    );
  }
}

export default MainLayout;
