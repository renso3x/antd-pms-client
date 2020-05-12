import React from 'react';
import { useFormik } from 'formik';
import { Form, Input, Button, Layout, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import StyledLogin from './styles';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export const Login: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleSumit = (): void => {
    formik.handleSubmit();
  }

  return (
    <Layout>
      <Content style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <StyledLogin>
          <Form initialValues={formik.initialValues} className="login-form">
            <Title level={2}>Welcome to Refluens</Title>
            <Paragraph>Please login your credentials to access the dashboard.</Paragraph>
            <Form.Item name="email">
              <Input prefix={<UserOutlined className="site-form-item-icon" />} onChange={formik.handleChange} />
            </Form.Item>

            <Form.Item name="password">
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                onChange={formik.handleChange}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" className="login-form-button" onClick={handleSumit}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </StyledLogin>
      </Content>
    </Layout>
  );
}
