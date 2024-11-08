import React, { useState } from 'react';
import { LinearProgress, Button } from '@mui/material';

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    setProgress((prev) => Math.min(prev + 10, 100));
  };

  return (
    <div>
      <LinearProgress variant="determinate" value={progress} />
      <Button onClick={increaseProgress} variant="contained" color="primary" sx={{ mt: 2 }}>
        Increase Progress
      </Button>
    </div>
  );
}

export default ProgressBar;
