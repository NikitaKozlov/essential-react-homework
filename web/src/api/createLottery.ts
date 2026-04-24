interface Lottery {
  name: string;
  prize: string;
}

const URL = import.meta.env.VITE_API_URL;

export async function createLottery(lottery: Lottery): Promise<boolean> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000)); //Just to see the loading state
    await fetch(`${URL}/lotteries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lottery),
    });
    return true;
  } catch (e) {
    console.log("error: ", e);
    return false;
  }
}