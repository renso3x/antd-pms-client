import React, { Component } from 'react';

import { Form, Input } from 'antd';

import PropertyTypeForm from './propertyTypeForm';

class PropertyForm extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="vertical" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
        <PropertyTypeForm />
        <Form.Item label="Accomodation Type">
          {getFieldDecorator('accomodationType', {
            rules: [
              { required: true, message: 'Please input an accomodation Type!' }
            ]
          })(<Input placeholder="Accomodation Type" />)}
        </Form.Item>
      </Form>
    );
  }
}

const WrappedPropertyFrom = Form.create({ name: 'propertyForm' })(PropertyForm);

export default WrappedPropertyFrom;
