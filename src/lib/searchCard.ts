import { CardInterface } from "@/types-d";
import { gql } from "@apollo/client";

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

export const GET_CARDS = gql`
  query GetCardByName($name: String!) {
    getCardByName(name: $name) {
      id
      name
      image_uris {
        normal
      }
    }
  }
`;
