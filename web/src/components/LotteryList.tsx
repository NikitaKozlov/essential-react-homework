import { Box, CircularProgress, Typography } from '@mui/material';
import { LotteryCard } from './LotteryCard';
import { useLotteries } from '../hooks/useLotteries';

export const LotteryList = () => {
  const { lotteries, isLoading } = useLotteries();

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (lotteries.length === 0) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
        <Typography variant="body1" color="text.secondary">
          There are currently no lotteries
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(275px, 1fr))',
        gap: 2,
        maxWidth: '900px',
      }}
    >
      {lotteries.map((lottery) => (
        <LotteryCard key={lottery.id} {...lottery} />
      ))}
    </Box>
  );
};

