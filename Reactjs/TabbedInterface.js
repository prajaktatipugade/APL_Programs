import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';

function TabbedInterface() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs">
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
      </Tabs>
      {value === 0 && <Box p={3}>Content for Tab 1</Box>}
      {value === 1 && <Box p={3}>Content for Tab 2</Box>}
      {value === 2 && <Box p={3}>Content for Tab 3</Box>}
    </Box>
  );
}

export default TabbedInterface;
