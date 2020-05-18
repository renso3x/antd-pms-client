import React, { useState } from 'react';
import { Card, Typography, Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';

const { Title } = Typography;

export interface FilterProps {
  onHandleFilter?: (value: string) => void;
}

export const Filter: React.SFC<FilterProps> = ({
  onHandleFilter
}) => {
  const [selectedValue, setState] = useState('availability')

  const handleChange = (e: RadioChangeEvent) => {
    setState(e.target.value)
  }

  return (
    <Card>
      <Title level={4}>Show</Title>
      <Radio.Group onChange={handleChange} value={selectedValue}>
        <Radio value={"availability"}>Availability</Radio>
        <Radio value={"price"}>Price</Radio>
        <Radio value={"minGuest"}>Min Guest</Radio>
        <Radio value={"maxGuest"}>Max Guest</Radio>
        <Radio value={"minNights"}>Min Nights</Radio>
        <Radio value={"maxNights"}>Max Nights</Radio>
      </Radio.Group>
    </Card>
  );
}