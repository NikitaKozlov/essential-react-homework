import { Box, CircularProgress, Typography, TextField, InputAdornment, Icon } from '@mui/material';
import { useState } from 'react';
import { LotteryCard } from './LotteryCard';
import { useLotteries } from '../hooks/useLotteries';

export const LotteryList = () => {
  const { lotteries, isLoading } = useLotteries();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLotteries = lotteries.filter((lottery) =>
    lottery.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lottery.prize.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    <>
      <TextField
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search"
        variant="outlined"
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <Icon>search</Icon>
              </InputAdornment>
            ),
          },
        }}
      />
      {filteredLotteries.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          No search result for "{searchTerm}"
        </Typography>
      ) : (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(275px, 1fr))',
            gap: 2,
            maxWidth: '900px',
          }}
        >
          {filteredLotteries.map((lottery) => (
            <LotteryCard key={lottery.id} {...lottery} />
          ))}
        </Box>
      )}
    </>
  );
};

