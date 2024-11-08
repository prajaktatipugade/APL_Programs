import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

function AutocompleteComponent() {
  const options = ['React', 'Vue', 'Angular', 'Svelte'];

  return (
    <Autocomplete
      options={options}
      renderInput={(params) => <TextField {...params} label="Select Framework" />}
    />
  );
}

export default AutocompleteComponent;
