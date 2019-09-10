import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Modal } from 'antd';

import { upperCaseFirstChar } from '../../utils/helper';

const BedForm = props => {
  const { title, form, visible, onSubmit, onCancel, value } = props;
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
        onSubmit({ name: values.name });
      }
    });
  };

  return (
    <Modal
      visible={visible}
      title={`${upperCaseFirstChar(title)} Form`}
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

BedForm.defaultProps = {
  title: 'Create'
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
