import React from 'react';
import { Layout } from 'antd';

import Navigation from './navigation';

const { Content, Footer } = Layout;

function MainLayout({ children }) {
  return (
    <Layout>
      <Navigation />
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
