import type { Lottery } from "../types";

const URL = import.meta.env.VITE_API_URL;

interface LotteryCreationParams {
  name: string,
  prize: string
}

export async function createLottery(lottery: LotteryCreationParams): Promise<boolean> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000)); //Just to see the loading state
    const response = await fetch(`${URL}/lotteries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...lottery,
        type: "simple"
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.log("error: ", error);
      return false;
    }

    return true;
  } catch (e) {
    console.log("error: ", e);
    return false;
  }
}