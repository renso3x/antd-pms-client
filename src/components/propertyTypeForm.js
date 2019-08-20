import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Modal } from 'antd';

import { upperCaseFirstChar } from '../utils/helper';

class PropertyTypeForm extends React.Component {
  static defaultProps = {
    title: 'Create'
  };

  render() {
    const { title, form, visible, onSubmit, onCancel, value } = this.props;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 }
      }
    };

    return (
      <Modal
        visible={visible}
        title={`${upperCaseFirstChar(title)} Form`}
        onOk={onSubmit}
        onCancel={onCancel}
      >
        <Form {...formItemLayout}>
          <Form.Item label="Name">
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: 'Please input a type name.'
                }
              ],
              initialValue: value.name
            })(<Input />)}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

PropertyTypeForm.propTypes = {
  title: PropTypes.string,
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func
  }),
  visible: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

const WrappedPropertyTypeForm = Form.create({ name: 'propertyType' })(
  PropertyTypeForm
);

export default WrappedPropertyTypeForm;
