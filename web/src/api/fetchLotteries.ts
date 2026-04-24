import type { Lottery } from "../types";

const URL = import.meta.env.VITE_API_URL;

export async function fetchLotteries(): Promise<Lottery[]> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000)); //Just to see the loading state
    const response = await fetch(`${URL}/lotteries`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (e) {
    console.log("error: ", e);
    return [];
  }
}
