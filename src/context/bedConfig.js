import React, { createContext, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import {
  createBedConfig,
  updateBedConfig,
  deleteBedConfig
} from '../reducers/bedConfiguration';

export const BedConfigContext = createContext();

const BedConfigProvider = props => {
  const [name, setName] = useState('');
  const [showBedForm, setForm] = useState(false);

  const bedConfig = useSelector(state => state.bedConfig);

  const handleSave = record => props.createBedConfig(record);

  const handleUpdate = record => props.updateBedConfig(record);

  const handleDelete = record => props.deleteBedConfig(record);

  const toggleForm = () => setForm(!showBedForm);

  return (
    <BedConfigContext.Provider
      value={{
        name,
        setName,
        showBedForm,
        bedConfig,
        handleSave,
        handleUpdate,
        handleDelete,
        toggleForm
      }}
    >
      {props.children}
    </BedConfigContext.Provider>
  );
};

export default connect(
  null,
  {
    createBedConfig,
    updateBedConfig,
    deleteBedConfig
  }
)(BedConfigProvider);
