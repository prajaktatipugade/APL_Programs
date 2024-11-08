import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ValidationForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError(!/\S+@\S+\.\S+/.test(value));
  };

  return (
    <div>
      <TextField
        label="Email"
        value={email}
        onChange={handleChange}
        error={error}
        helperText={error ? "Invalid email format" : ""}
      />
      <Button variant="contained" color="primary" disabled={error}>
        Submit
      </Button>
    </div>
  );
}

export default ValidationForm;
