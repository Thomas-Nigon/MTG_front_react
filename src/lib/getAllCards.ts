//import { CardPromise } from "@/types-d";
import { gql } from "@apollo/client";

/* export const getAllCards = async (queries: string): Promise<CardPromise> => {
  try {
    const response = await fetch(`http://localhost:5050/cards?${queries}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}; */
export const GET_ALL_CARDS = gql`
  query GetCardsWithQuery($data: CardQuery!, $size: Int!, $page: Int!) {
    getCardsWithQuery(data: $data, size: $size, page: $page) {
      cards {
        card_id
        name
        rarity
        image_uris {
          normal
        }
      }
      pageCount
      totalCount
    }
  }
`;
