import { CardPromise } from "@/types-d";

export const getAllCards = async (queries: string): Promise<CardPromise> => {
  try {
    const response = await fetch(`http://localhost:5050/cards?${queries}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
