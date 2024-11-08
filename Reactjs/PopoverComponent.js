import React, { useState } from 'react';
import { Button, Popover, Typography } from '@mui/material';

function PopoverComponent() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Typography sx={{ p: 2 }}>This is a popover message!</Typography>
      </Popover>
    </div>
  );
}

export default PopoverComponent;
