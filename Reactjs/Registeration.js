import React from 'react';
import { Button, Typography, Container, AppBar, Toolbar } from '@mui/material';

export const Registeration = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            MY MUI App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to React MUI
        </Typography>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
      </Container>
    </div>
  );
};
