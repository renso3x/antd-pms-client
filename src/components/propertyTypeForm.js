import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Modal } from 'antd';

class PropertyTypeForm extends React.Component {
  static defaultProps = {
    title: 'Create Form'
  };

  render() {
    const { title, form, visible, onSubmit, onCancel } = this.props;
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
        title={title}
        onOk={onSubmit}
        onCancel={onCancel}
      >
        <Form {...formItemLayout}>
          <Form.Item label="Name">
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: 'Please input a name'
                }
              ],
              initialValue: 'test' // send props
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
