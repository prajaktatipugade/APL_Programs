import React, { useState } from 'react';
import { Rating, Typography } from '@mui/material';

function RatingComponent() {
  const [rating, setRating] = useState(3);

  return (
    <div>
      <Typography variant="h6">Rating: {rating}</Typography>
      <Rating value={rating} onChange={(event, newValue) => setRating(newValue)} />
    </div>
  );
}

export default RatingComponent;
