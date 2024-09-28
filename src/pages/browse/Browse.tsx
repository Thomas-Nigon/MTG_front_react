import styles from "./browse.module.css";
import { useEffect, useState } from "react";
import { CardInterface } from "@/types-d";

import SingleCard from "@/components/SingleCard/SingleCard";
import BrowseSideMenu from "@/components/BrowseSideMenu/BrowseSideMenu";

export default function Browse() {
  const [cardList, setCardList] = useState<CardInterface[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentDeck, setcurrentDeck] = useState<CardInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3Aaer&unique=prints"
        );
        const cards = await response.json();
        setCardList(cards.data);
        console.log(cardList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const AddCard = (card: CardInterface) => {
    setIsOpen(true);
    if (!currentDeck.find((c) => c.name === card.name)) {
      setcurrentDeck([...currentDeck, { ...card, quantity: 1 }]);
    } else {
      setcurrentDeck(
        currentDeck.map((c) =>
          c.name === card.name ? { ...c, quantity: c.quantity + 1 } : c
        )
      );
    }
    console.log(currentDeck);
  };

  const RemoveCard = (card: CardInterface) => {
    setcurrentDeck(currentDeck.filter((c) => c.name !== card.name));
  };

  /*   const saveState = () => {
    console.log("saving deck");
    setIsOpen(false);
  }; */
  return (
    <main className="p-2 mt-20">
      <h2 className="mb-4">Browse cards and add them to your deck</h2>
      <div className="flex flex-row">
        <section className={styles.cardsContainer}>
          {cardList.map((card) => (
            <SingleCard key={card.id} card={card} addCard={AddCard} />
          ))}
        </section>
        <BrowseSideMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          currentDeck={currentDeck}
          setCurrentDeck={setcurrentDeck}
          RemoveCard={RemoveCard}
        />
      </div>
    </main>
  );
}
