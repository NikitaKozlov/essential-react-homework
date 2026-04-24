const URL = import.meta.env.VITE_API_URL;

export interface RegisterRequest {
  lotteryId: string;
  name: string;
}

export async function registerForLottery(request: RegisterRequest): Promise<boolean> {
  try {
    const response = await fetch(`${URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      const error = await response.json();
      console.log("error: ", error);
      return false;
    }

    const data = await response.json();
    return data.status === "Success";
  } catch (e) {
    console.log("error: ", e);
    return false;
  }
}
