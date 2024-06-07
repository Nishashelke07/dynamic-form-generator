import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';

const Dropdown = ({ label, options, value, onChange, error }) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <FormControl fullWidth error={!!error}>
        <InputLabel>{label}</InputLabel>
        <Select value={value} onChange={onChange}>
          {options.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </div>
  );
};

export default Dropdown;
