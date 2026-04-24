import React, { createContext, useState, useEffect, useCallback } from "react";
import { fetchLotteries } from "../api/fetchLotteries";
import type { Lottery } from "../types";

export interface ILotteriesContext {
  lotteries: Lottery[];
  isLoading: boolean;
  refetch: () => Promise<void>;
  selectedLotteryIds: string[];
  toggleLotterySelection: (id: string) => void;
}

export const LotteriesContext = createContext<ILotteriesContext>({
  lotteries: [],
  isLoading: false,
  refetch: async () => {},
  selectedLotteryIds: [],
  toggleLotterySelection: () => {},
});

const LotteriesContextProvider = ({ children }: React.PropsWithChildren) => {
  const [lotteries, setLotteries] = useState<Lottery[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLotteryIds, setSelectedLotteryIds] = useState<string[]>([]);

  const toggleLotterySelection = useCallback((id: string) => {
    setSelectedLotteryIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((lotteryId) => lotteryId !== id);
      } else {
        return [...prev, id];
      }
    });
  }, []);

  const refetch = useCallback(async () => {
    setIsLoading(true);
    const data = await fetchLotteries();
    setLotteries(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <LotteriesContext.Provider
      value={{ lotteries, isLoading, refetch, selectedLotteryIds, toggleLotterySelection }}
    >
      {children}
    </LotteriesContext.Provider>
  );
};

export default LotteriesContextProvider;
