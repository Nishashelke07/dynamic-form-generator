import React from 'react';
import { FormControl, FormControlLabel, RadioGroup, Radio, FormHelperText } from '@mui/material';

const RadioButton = ({ label, options, value, onChange, error }) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <FormControl component="fieldset" error={!!error}>
        <legend>{label}</legend>
        <RadioGroup value={value} onChange={onChange}>
          {options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </div>
  );
};

export default RadioButton;
