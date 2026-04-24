import { Fab } from '@mui/material';
import { useLotteries } from '../hooks/useLotteries';
import { useModal } from '../hooks/useModal';

export const RegisterButton = () => {
  const { selectedLotteryIds } = useLotteries();
  const { openModal } = useModal();

  return (
    <Fab
      variant="extended"
      color="primary"
      disabled={selectedLotteryIds.length === 0}
      onClick={openModal}
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 180,
      }}
    >
      Register
    </Fab>
  );
};
