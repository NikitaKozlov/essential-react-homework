import { Card, CardContent, Typography } from '@mui/material';
import type { Lottery } from '../types';
import { useLotteries } from '../hooks/useLotteries';

export const LotteryCard = ({ id, name, prize }: Lottery) => {
  const { selectedLotteryIds, toggleLotterySelection } = useLotteries();
  const isSelected = selectedLotteryIds.includes(id);

  return (
    <Card
      sx={{
        minWidth: 275,
        cursor: 'pointer',
        border: isSelected ? 2 : 1,
        borderColor: isSelected ? 'primary.main' : 'divider',
        '&:hover': {
          borderColor: isSelected ? 'primary.main' : 'action.hover',
        }
      }}
      onClick={() => toggleLotterySelection(id)}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2">
          {prize}
        </Typography>
      </CardContent>
    </Card>
  );
};
