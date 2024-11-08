import React from 'react';
import { Tooltip, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

function TooltipExample() {
  return (
    <Tooltip title="Information tooltip" arrow>
      <IconButton color="primary">
        <InfoIcon />
      </IconButton>
    </Tooltip>
  );
}

export default TooltipExample;
