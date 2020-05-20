import React from 'react';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import { Redirect, useHistory } from 'react-router-dom';
import { Form, Input, Button, Layout, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { makeLogin, ILogin } from '../../actions/auth';
import { checkAuth } from '../../components/PrivateRoute';

import StyledLogin from './styles';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

interface Props {
  makeLogin: (auth: ILogin, cb: () => void) => void;
}

const _Login: React.FC<Props> = ({
  makeLogin
}) => {
    const history = useHistory();
    const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      makeLogin(values, () => {
        history.push('/');
      });
    },
  });

  const handleSumit = (): void => {

    formik.handleSubmit();
  }

  if (checkAuth()) {
    return <Redirect to='/' />;
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

export const Login = connect(null, {
  makeLogin
})(_Login);