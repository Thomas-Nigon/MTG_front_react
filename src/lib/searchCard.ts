import { CardInterface } from "@/types-d";

export const searchCard = async (
  cardName: string
): Promise<CardInterface[]> => {
  const response = await fetch(`http://localhost:5050/cards/name`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cardName }),
  });
  const data = await response.json();
  console.log("data from FN", data);
  return data;
};
