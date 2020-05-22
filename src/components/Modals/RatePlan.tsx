import React, { useState } from 'react';
import { Modal, Form, Input, Alert, Select } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { RatePlan, Inclusions } from '../../actions/hotel';
import { FormStyles } from './style';

const { Option } = Select;

const FormSchema = Yup.object({
  name: Yup.string().required(),
  inclusion: Yup.string(),
  minAdult: Yup.number().required(),
  maxAdult: Yup.number().required(),
  minChild: Yup.number().required(),
  maxChild: Yup.number().required(),
  defaultRate: Yup.number().required(),
});

export interface RatePlanModalFormProps {
  isVisible: boolean;
  handleSubmit: (values: RatePlan) => void;
  handleCancel: (modalName: string) => void;
}

export const RatePlanModalForm: React.SFC<RatePlanModalFormProps> = ({
  isVisible,
  handleCancel,
  handleSubmit
}) => {
  const [inclusion, setInclustion] = useState<Inclusions>('breakfast');

  const formik = useFormik({
    initialValues: {
      name: '',
      inclusion: 'breakfast',
      minAdult: 0,
      maxAdult: 0,
      minChild: 0,
      maxChild: 0,
      defaultRate: 0,
    },
    validationSchema: FormSchema,
    onSubmit: (values: RatePlan) => {
      const payload = {
        ...values,
        inclusion,
        minAdult: +values.minAdult,
        maxAdult: +values.maxAdult,
        minChild: +values.minChild,
        maxChild: +values.maxChild,
      };

      handleSubmit(payload);
    },
  });

  const handleOk = (): void => {
    formik.handleSubmit()
  }

  const formItemLayout ={
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  }

  const handleSelect = (value: Inclusions, option: any) => {
    setInclustion(value);
  }

  const { errors, values } = formik;

  return (
    <Modal
      visible={isVisible}
      title="Rate Plan"
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
              placeholder=""
              onChange={formik.handleChange}
            />
            {errors.name && <Alert className="error" message={errors.name} type="error" />}
          </Form.Item>
          <Form.Item label="Inclusions">
            <Select onChange={handleSelect}>
              <Option value="breakfast">Breakfast</Option>
              <Option value="lunch">Lunch</Option>
              <Option value="dinnner">Dinner</Option>
              <Option value="all inclusive">All Inclusive</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Min Child">
            <Input
              name="minChild"
              placeholder=""
              value={values.minChild}
              onChange={formik.handleChange}
            />
            {errors.minChild && <Alert className="error" message={errors.minChild} type="error" />}
          </Form.Item>
          <Form.Item label="Max Child">
            <Input
              name="maxChild"
              placeholder=""
              value={values.maxChild}
              onChange={formik.handleChange}
            />
            {errors.maxChild && <Alert className="error" message={errors.maxChild} type="error" />}
          </Form.Item>
          <Form.Item label="Min Adult">
            <Input
              name="minAdult"
              placeholder=""
              value={values.minAdult}
              onChange={formik.handleChange}
            />
            {errors.minAdult && <Alert className="error" message={errors.minAdult} type="error" />}
          </Form.Item>
          <Form.Item label="Max Adult">
            <Input
              name="maxAdult"
              placeholder=""
              value={values.maxAdult}
              onChange={formik.handleChange}
            />
            {errors.maxAdult && <Alert className="error" message={errors.maxAdult} type="error" />}
          </Form.Item>
        </Form>
      </FormStyles>
    </Modal>
  );
}
