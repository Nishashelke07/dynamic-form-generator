import React, { useState } from 'react';
import { Button, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const FormBuilder = ({ fields, onAddField, onRemoveField }) => {
  const [fieldType, setFieldType] = useState('');
  const [label, setLabel] = useState('');
  const [options, setOptions] = useState('');

  const handleAddField = () => {
    if (fieldType && label) {
      const field = {
        type: fieldType,
        label,
        options: (fieldType === 'dropdown' || fieldType === 'radio') ? options.split(',').map((opt) => opt.trim()) : [],
      };
      onAddField(field);
      setFieldType('');
      setLabel('');
      setOptions('');
    }
  };

  return (
    <div style={{ marginBottom: '16px' }}>
      <h2>Form Builder</h2>
      <div style={{ marginBottom: '16px' }}>
        <FormControl fullWidth>
          <InputLabel>Field Type</InputLabel>
          <Select
            value={fieldType}
            onChange={(e) => setFieldType(e.target.value)}
          >
            <MenuItem value="">Select Field Type</MenuItem>
            <MenuItem value="text">Text Input</MenuItem>
            <MenuItem value="textarea">Text Area</MenuItem>
            <MenuItem value="dropdown">Dropdown</MenuItem>
            <MenuItem value="radio">Radio Button</MenuItem>
            <MenuItem value="checkbox">Checkbox</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={{ marginBottom: '16px' }}>
        <TextField
          label="Label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          fullWidth
        />
      </div>
      {(fieldType === 'dropdown' || fieldType === 'radio') && (
        <div style={{ marginBottom: '16px' }}>
          <TextField
            label="Options (comma-separated)"
            value={options}
            onChange={(e) => setOptions(e.target.value)}
            fullWidth
          />
        </div>
      )}
      <Button variant="contained" color="primary" onClick={handleAddField}>
        Add Field
      </Button>
      <div style={{ marginTop: '16px' }}>
        <h3>Fields</h3>
        {fields.map((field, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <div style={{ flexGrow: 1 }}>{field.label} ({field.type})</div>
            <Button variant="contained" color="secondary" onClick={() => onRemoveField(index)}>Remove</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormBuilder;
