import { CardInterface } from "@/types-d";

export const searchCard = async (
  cardName: string
): Promise<CardInterface[]> => {
  try {
    const response = await fetch(`http://localhost:5050/cards/name`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cardName }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
