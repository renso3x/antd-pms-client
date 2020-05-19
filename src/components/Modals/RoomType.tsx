import React from 'react';
import { Modal, Form, Input, Alert } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FormStyles } from './style';

export interface RoomType {
  name: string;
  description?: string;
}

const FormSchema = Yup.object({
  name: Yup.string().required(),
  description: Yup.string()
});

export interface RoomTypeModalFormProps {
  isVisible: boolean;
  handleSubmit: (values: RoomType) => void;
  handleCancel: (modalName: string) => void;
}

export const RoomTypeModalForm: React.SFC<RoomTypeModalFormProps> = ({
  isVisible,
  handleCancel,
  handleSubmit
}) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
    },
    validationSchema: FormSchema,
    onSubmit: (values: RoomType) => {
      handleSubmit(values);
    },
  });

  const handleOk = (): void => {
    formik.handleSubmit()
  }

  const formItemLayout ={
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  }

  const { errors } = formik;

  return (
    <Modal
      visible={isVisible}
      title="Room Type"
      onOk={handleOk}
      onCancel={() => handleCancel('showRoomTypeModal')}
    >
      <FormStyles>
        <Form
          {...formItemLayout}
          initialValues={formik.initialValues}
        >
          <Form.Item label="Name">
            <Input
              name="name"
              placeholder="Name"
              onChange={formik.handleChange}
            />
            {errors.name && <Alert className="error" message={errors.name} type="error" />}
          </Form.Item>
          <Form.Item label="Description">
            <Input.TextArea
              name="description"
              placeholder="Type description...."
              onChange={formik.handleChange}
            />
          </Form.Item>
        </Form>
      </FormStyles>
    </Modal>
  );
}
