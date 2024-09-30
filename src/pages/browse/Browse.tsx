import styles from "./browse.module.css";
import { useEffect, useState } from "react";
import { CardInterface, CardPromise } from "@/types-d";

import SingleCard from "@/components/SingleCard/SingleCard";
import BrowseSideMenu from "@/components/BrowseSideMenu/BrowseSideMenu";
import BrowserFilterBar from "@/components/BrowserFilterBar/BrowserFilterBar";
import BrowsePagination from "./components/Pagination/BrowsePagination";

export default function Browse() {
  const [cardList, setCardList] = useState<CardInterface[]>([]);
  const [cardsQueries, setCardQueries] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pageCount, setPageCount] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [currentDeck, setcurrentDeck] = useState<CardInterface[]>([]);

  useEffect(() => {
    const getCards = async (cardsQueries: string): Promise<CardPromise[]> => {
      const response = await fetch(
        `http://localhost:5050/cards?${cardsQueries}`
      );
      const data = await response.json();
      console.log(data);
      setCardList(data.data);
      setPageCount(data.pageCount);
      return data;
    };
    getCards(cardsQueries);
  }, [cardsQueries]);

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

  return (
    <main className="p-2 mt-20">
      <header>
        <h2 className="mb-4">Browse cards and add them to your deck:</h2>

        <BrowserFilterBar
          cardQueries={cardsQueries}
          setCardQueries={setCardQueries}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </header>
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
      <footer>
        <BrowsePagination currentPage={currentPage} setPage={setCurrentPage} />
      </footer>
    </main>
  );
}
