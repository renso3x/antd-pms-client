import React, { Component } from 'react';
import { Row, Col, Form, Icon, Input, Button } from 'antd';
import { Redirect } from 'react-router-dom';
import { authenticate, setToken, getCurrentUser } from '../services/auth';

class Login extends Component {
  onHandleSubmit = async e => {
    e.preventDefault();

    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        try {
          const response = await authenticate(values);
          if (response.status === 200) {
            setToken(response.data);
            const { state } = this.props.location;
            window.location = state ? state.from.pathname : '/';
          }
        } catch (e) {
          console.log(e);
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    if (getCurrentUser()) return <Redirect to="/" />;

    return (
      <div class="login__form">
        <Form onSubmit={this.onHandleSubmit} className="login__inner_form">
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [
                {
                  required: true,
                  message: 'Please input your email!'
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                className="form-item"
                placeholder="Email"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Password!'
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
                className="form-item"
              />
            )}
          </Form.Item>
          <Row>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
            >
              Log in
            </Button>
          </Row>
        </Form>
      </div>
    );
  }
}

const WrappedLoginForm = Form.create({ name: 'login' })(Login);

export default WrappedLoginForm;
