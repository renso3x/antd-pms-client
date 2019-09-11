import React, { createContext, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import {
  createBedConfig,
  updateBedConfig,
  deleteBedConfig
} from '../reducers/bedConfiguration';

export const BedConfigContext = createContext();

const BedConfigProvider = props => {
  const [form, setValues] = useState({ name: '' });
  const [showBedForm, setForm] = useState(false);

  const bedConfig = useSelector(state => state.bedConfig);

  const resetForm = () => {
    setValues({ name: '' });
    setForm(false);
  };

  const handleSave = record => {
    props.createBedConfig(record);
    resetForm();
  };

  const handleEdit = record => {
    setValues({ ...record });
    setForm(true);
  };

  const handleUpdate = record => {
    props.updateBedConfig(record);
    resetForm();
  };

  const handleDelete = record => props.deleteBedConfig(record);

  const toggleForm = () => setForm(!showBedForm);

  return (
    <BedConfigContext.Provider
      value={{
        form,
        setValues,
        showBedForm,
        bedConfig,
        handleSave,
        handleUpdate,
        handleDelete,
        toggleForm,
        handleEdit
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
