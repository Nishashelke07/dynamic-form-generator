Dynamic Form Generator
A React.js application using Material-UI that allows users to create, save, load, and manage dynamic forms with various types of form fields.

Features
  Add and remove form fields: text input, text area, dropdown, radio button, checkbox.
  Save form configurations with custom names.
  Load and manage saved configurations.
  Dynamic form rendering based on user-defined configurations.
  Persistent storage using localStorage.
  
Usage
  Load Configurations: Select and load saved configurations from the dropdown (visible when no fields are added).
  Add Fields: Use the form builder to add fields of various types.
  Save Configurations: Save the current configuration with a custom name.
  Render Form: The dynamic form is rendered based on the added fields.

File Structure
  App.js: Manages state, handles saving/loading configurations, renders FormBuilder and DynamicForm.
  FormBuilder.js: UI for adding/removing form fields.
  DynamicForm.js: Renders the form based on the fields configuration.

## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
