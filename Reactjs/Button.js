import React, { useState } from 'react';
import Button from '@mui/material/Button';

function SimpleButton() {
  const [clicked, setClicked] = useState(false);

  return (
    <Button 
      variant="contained" 
      color={clicked ? "secondary" : "primary"} 
      onClick={() => setClicked(!clicked)}
    >
      {clicked ? "Clicked!" : "Click Me"}
    </Button>
  );
}

export default SimpleButton;
