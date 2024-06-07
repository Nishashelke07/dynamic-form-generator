import React, { useState } from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';
import Dropdown from './Dropdown';
import RadioButton from './RadioButton';
import Checkbox from './CheckBox';
import { Button } from '@mui/material';

const DynamicForm = ({ fields }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (label, value) => {
    setFormData({
      ...formData,
      [label]: value,
    });
    setErrors({
      ...errors,
      [label]: '',
    });
  };

  const validate = () => {
    const newErrors = {};
    fields.forEach(field => {
      if (!formData[field.label]) {
        newErrors[field.label] = `${field.label} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      console.log(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => {
        switch (field.type) {
          case 'text':
            return (
              <TextInput
                key={index}
                label={field.label}
                value={formData[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                error={errors[field.label]}
              />
            );
          case 'textarea':
            return (
              <TextArea
                key={index}
                label={field.label}
                value={formData[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                error={errors[field.label]}
              />
            );
          case 'dropdown':
            return (
              <Dropdown
                key={index}
                label={field.label}
                options={field.options}
                value={formData[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                error={errors[field.label]}
              />
            );
          case 'radio':
            return (
              <RadioButton
                key={index}
                label={field.label}
                options={field.options}
                value={formData[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                error={errors[field.label]}
              />
            );
          case 'checkbox':
            return (
              <Checkbox
                key={index}
                label={field.label}
                checked={!!formData[field.label]}
                onChange={(e) => handleChange(field.label, e.target.checked)}
                error={errors[field.label]}
              />
            );
          default:
            return null;
        }
      })}
      {fields.length > 0 && (
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      )}
    </form>
  );
};

export default DynamicForm;
