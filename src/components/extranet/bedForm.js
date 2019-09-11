import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Modal } from 'antd';

const BedForm = props => {
  const { form, visible, onSubmit, onCancel, value, onUpdate } = props;
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

  const handleSubmit = () => {
    form.validateFields((err, values) => {
      if (!err) {
        if (value._id) {
          onUpdate({
            id: value._id,
            data: {
              name: values.name
            }
          });
        } else {
          onSubmit({ name: values.name });
        }
        form.resetFields();
      }
    });
  };

  const formTitle = !value._id ? 'Create' : 'Update';

  return (
    <Modal
      visible={visible}
      title={`${formTitle} Form`}
      onOk={handleSubmit}
      onCancel={onCancel}
    >
      <Form {...formItemLayout}>
        <Form.Item label="Name">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'Please input a bed type.'
              }
            ],
            initialValue: value.name
          })(<Input />)}
        </Form.Item>
      </Form>
    </Modal>
  );
};

BedForm.propTypes = {
  title: PropTypes.string,
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func
  }),
  visible: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

const WrappedBedForm = Form.create({ name: 'bedForm' })(BedForm);

export default WrappedBedForm;
