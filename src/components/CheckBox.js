import React from 'react';
import { FormControlLabel, Checkbox as MuiCheckbox, FormHelperText } from '@mui/material';

const Checkbox = ({ label, checked, onChange, error }) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <FormControlLabel
        control={<MuiCheckbox checked={checked} onChange={onChange} />}
        label={label}
      />
      {error && <FormHelperText error>{error}</FormHelperText>}
    </div>
  );
};

export default Checkbox;
