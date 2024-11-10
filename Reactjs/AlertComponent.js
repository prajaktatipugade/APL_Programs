import React, { useState } from 'react';
import { Alert, Button } from '@mui/material';

function AlertComponent() {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {open && (
        <Alert onClose={handleClose} severity="success">
          This is a success alert — check it out!
        </Alert>
      )}
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Show Alert
      </Button>
    </div>
  );
}

export default AlertComponent;
