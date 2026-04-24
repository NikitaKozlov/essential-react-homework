import React, { createContext, useState, useEffect, useCallback } from "react";
import { fetchLotteries } from "../api/fetchLotteries";
import type { Lottery } from "../types";

export interface ILotteriesContext {
  lotteries: Lottery[];
  isLoading: boolean;
  refetch: () => Promise<void>;
}

export const LotteriesContext = createContext<ILotteriesContext>({
  lotteries: [],
  isLoading: false,
  refetch: async () => {},
});

const LotteriesContextProvider = ({ children }: React.PropsWithChildren) => {
  const [lotteries, setLotteries] = useState<Lottery[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
      value={{ lotteries, isLoading, refetch }}
    >
      {children}
    </LotteriesContext.Provider>
  );
};

export default LotteriesContextProvider;
