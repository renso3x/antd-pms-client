import React, { createContext, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import {
  createAmenities,
  updateAmenities,
  deleteAmenities
} from '../reducers/amenities';

export const AmenitiesContext = createContext();

const AmenitiesProvider = props => {
  const [form, setValues] = useState({ name: '' });
  const [showForm, setForm] = useState(false);

  const amenities = useSelector(state => state.amenities);

  const resetForm = () => {
    setValues({ name: '' });
    setForm(false);
  };

  const handleSave = record => {
    props.createAmenities(record);
    resetForm();
  };

  const handleEdit = record => {
    setValues({ ...record });
    setForm(true);
  };

  const handleUpdate = record => {
    props.updateAmenities(record);
    resetForm();
  };

  const handleDelete = record => props.deleteAmenities(record);

  const toggleForm = () => setForm(!showForm);

  return (
    <AmenitiesContext.Provider
      value={{
        form,
        setValues,
        showForm,
        amenities,
        handleSave,
        handleUpdate,
        handleDelete,
        toggleForm,
        handleEdit
      }}
    >
      {props.children}
    </AmenitiesContext.Provider>
  );
};

export default connect(
  null,
  {
    createAmenities,
    updateAmenities,
    deleteAmenities
  }
)(AmenitiesProvider);
