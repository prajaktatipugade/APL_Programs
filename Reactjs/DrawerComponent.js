import React, { useState } from 'react';
import { Drawer, Button, List, ListItem, ListItemText } from '@mui/material';

function DrawerComponent() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  return (
    <div>
      <Button variant="contained" onClick={toggleDrawer(true)}>
        Open Drawer
      </Button>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Profile" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default DrawerComponent;
