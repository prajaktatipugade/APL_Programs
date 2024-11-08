import React from 'react';
import { Badge, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

function BadgeComponent() {
  return (
    <Badge badgeContent={4} color="secondary">
      <IconButton color="primary">
        <NotificationsIcon />
      </IconButton>
    </Badge>
  );
}

export default BadgeComponent;
