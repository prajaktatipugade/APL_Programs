import React, { useEffect, useState } from 'react';
import { Skeleton, Typography } from '@mui/material';

function SkeletonLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <Skeleton variant="text" width={200} height={40} />
      ) : (
        <Typography variant="h6">Data Loaded</Typography>
      )}
    </div>
  );
}

export default SkeletonLoading;
