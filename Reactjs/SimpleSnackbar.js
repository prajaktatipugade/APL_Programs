import React, { useState } from 'react';
import { Button, Snackbar } from '@mui/material';

function SimpleSnackbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Show Notification
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="This is a notification"
      />
    </div>
  );
}

export default SimpleSnackbar;
