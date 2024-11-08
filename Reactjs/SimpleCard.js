import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

function SimpleCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://via.placeholder.com/150"
        alt="Card Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Card Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a description of the card content.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SimpleCard;
