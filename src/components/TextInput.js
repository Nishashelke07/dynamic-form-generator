import React from 'react';
import TextField from '@mui/material/TextField';

const TextInput = ({ label, value, onChange, error }) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <TextField
        label={label}
        value={value}
        onChange={onChange}
        fullWidth
        error={!!error}
        helperText={error}
      />
    </div>
  );
};

export default TextInput;
