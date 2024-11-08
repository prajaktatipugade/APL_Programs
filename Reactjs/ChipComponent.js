import React, { useState } from 'react';
import { Chip } from '@mui/material';

function ChipComponent() {
  const [chips, setChips] = useState(['JavaScript', 'React', 'Node.js']);

  const handleDelete = (chipToDelete) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <div>
      {chips.map((chip) => (
        <Chip
          key={chip}
          label={chip}
          onDelete={() => handleDelete(chip)}
          color="primary"
          variant="outlined"
        />
      ))}
    </div>
  );
}

export default ChipComponent;
