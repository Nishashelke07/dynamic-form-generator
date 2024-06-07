import React from 'react';
import TextField from '@mui/material/TextField';

const TextArea = ({ label, value, onChange, error }) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <TextField
        label={label}
        value={value}
        onChange={onChange}
        multiline
        rows={4}
        fullWidth
        error={!!error}
        helperText={error}
      />
    </div>
  );
};

export default TextArea;
