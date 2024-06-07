import React, { useState, useEffect } from 'react';
import FormBuilder from './components/FormBuilder';
import DynamicForm from './components/DynamicForm';
import { Container, Typography, Button, TextField, MenuItem, Select, FormControl, InputLabel, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const App = () => {
  const [fields, setFields] = useState([]);
  const [configs, setConfigs] = useState({});
  const [configName, setConfigName] = useState('');
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedConfig, setSelectedConfig] = useState('');

  useEffect(() => {
    const storedConfigs = localStorage.getItem('formConfigs');
    if (storedConfigs) {
      setConfigs(JSON.parse(storedConfigs));
    }
  }, []);

  const handleAddField = (field) => {
    setFields([...fields, field]);
  };

  const handleRemoveField = (index) => {
    const newFields = fields.slice();
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleSaveConfig = () => {
    setDialogOpen(true);
  };

  const handleSaveConfigWithName = () => {
    const newConfigs = { ...configs, [configName]: fields };
    setConfigs(newConfigs);
    localStorage.setItem('formConfigs', JSON.stringify(newConfigs));
    setDialogOpen(false);
    setConfigName('');
    alert('Form configuration saved!');
  };

  const handleLoadConfig = () => {
    if (selectedConfig && configs[selectedConfig]) {
      setFields(configs[selectedConfig]);
      alert('Form configuration loaded!');
    } else {
      alert('No saved configuration found.');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dynamic Form Generator
      </Typography>
      {fields.length === 0 && (
        <div style={{ marginBottom: '16px' }}>
          <FormControl fullWidth>
            <InputLabel>Load Config</InputLabel>
            <Select value={selectedConfig} onChange={(e) => setSelectedConfig(e.target.value)}>
              {Object.keys(configs).map((name, index) => (
                <MenuItem key={index} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained" color="secondary" onClick={handleLoadConfig} style={{ marginTop: '8px' }}>
            Load Config
          </Button>
        </div>
      )}
      <FormBuilder fields={fields} onAddField={handleAddField} onRemoveField={handleRemoveField} />
      {fields.length > 0 && (
        <Button variant="contained" color="primary" onClick={handleSaveConfig} style={{ marginTop: '16px' }}>
          Save Config
        </Button>
      )}
      {fields.length > 0 && <DynamicForm fields={fields} />}
      
      <Dialog open={isDialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Save Configuration</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter a name for your configuration.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Configuration Name"
            fullWidth
            value={configName}
            onChange={(e) => setConfigName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveConfigWithName} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default App;
