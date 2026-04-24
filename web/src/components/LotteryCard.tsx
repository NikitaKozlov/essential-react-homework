import { Card, CardContent, Typography } from '@mui/material';
import type { Lottery } from '../types';


export const LotteryCard = ({ name, prize }: Lottery) => {
  return (
    <Card sx={{ minWidth: 275 }}>
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
