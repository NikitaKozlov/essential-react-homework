import { useContext } from 'react';
import { LotteriesContext } from '../contexts/LotteriesContext';

export const useLotteries = () => {
  const { lotteries, isLoading, refetch, selectedLotteryIds, toggleLotterySelection } = useContext(LotteriesContext);

  return { lotteries, isLoading, refetch, selectedLotteryIds, toggleLotterySelection };
};
