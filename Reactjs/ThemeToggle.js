import React, { useState } from 'react';
import { Switch, Typography } from '@mui/material';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div>
      <Typography variant="h6">Theme: {isDark ? 'Dark' : 'Light'}</Typography>
      <Switch checked={isDark} onChange={handleToggle} color="primary" />
    </div>
  );
}

export default ThemeToggle;
