import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import { useSnackbar } from '../hooks/useSnackbar';

const AddLotterySnackbar = () => {
  const { isShown, isSuccess, hideSnackbar } = useSnackbar();

  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    hideSnackbar();
  };

  return (
    <Snackbar
      open={isShown}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    >
      <Alert
        severity={isSuccess ? 'success' : 'error'}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {isSuccess
          ? 'Lottery added successfully!'
          : 'Failed to add lottery. Please try again.'}
      </Alert>
    </Snackbar>
  );
};

export default AddLotterySnackbar;
