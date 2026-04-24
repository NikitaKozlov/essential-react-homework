import { Alert, Snackbar } from '@mui/material';
import React, { useState } from 'react';
import { useSnackbar } from '../hooks/useSnackbar';

const AddLotterySnackbar = () => {
  const { isShown, isSuccess, message } = useSnackbar();
  const [open, setOpen] = useState(false);

  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  React.useEffect(() => {
    if (isShown) {
      setOpen(true);
    }
  }, [isShown]);

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    >
      <Alert
        severity={isSuccess ? 'success' : 'error'}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AddLotterySnackbar;
