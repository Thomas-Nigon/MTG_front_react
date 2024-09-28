import styles from "./browse.module.css";
import { useEffect, useState } from "react";
import { CardInterface } from "@/types-d";
import { IoIosWarning, IoIosTrash } from "react-icons/io";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import {
  Dialog,
  DialogClose,
  DialogFooter,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";

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
            <article className={styles.card} key={card.id + card.name}>
              <Card className="w-[300px] bg-accent">
                <CardHeader>
                  <CardTitle>{card.name}</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <img src={card.image_uris.normal} alt={card.name} />
                </CardContent>
                <CardFooter className="flex justify-center ">
                  <Button className="w-32" onClick={() => AddCard(card)}>
                    Add to your deck
                  </Button>
                </CardFooter>
              </Card>
            </article>
          ))}
        </section>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add cards to your deck</SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <ul>
              {currentDeck.map((card) => (
                <li
                  key={card.id}
                  className="flex flex-row items-center justify-between mb-2"
                >
                  <HoverCard openDelay={100}>
                    <HoverCardTrigger className="underline hover:cursor-pointer">
                      {card.name}
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <img src={card.image_uris.normal} alt={card.name} />
                    </HoverCardContent>
                  </HoverCard>
                  <article className="flex flex-row items-center gap-1">
                    <>
                      {card.quantity > 4 ? (
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger>
                              <IoIosWarning className="text-red-500 text-2xl" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Maximum 4 cards allowed</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ) : null}
                    </>
                    <Input
                      onChange={(e) => {
                        setcurrentDeck(
                          currentDeck.map((c) =>
                            c.name === card.name
                              ? { ...c, quantity: parseInt(e.target.value) }
                              : c
                          )
                        );
                      }}
                      className="w-20 "
                      type="number"
                      min={0}
                      placeholder={card.quantity.toString()}
                    />
                    <IoIosTrash
                      className=" text-2xl"
                      onClick={() => RemoveCard(card)}
                    />
                  </article>
                </li>
              ))}
            </ul>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">Save</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Save your deck</DialogTitle>
                  <DialogDescription>
                    Enter a name for your deck
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                  <div className="grid flex-1 gap-2">
                    <Input type="text" placeholder="name ..." />
                  </div>
                </div>
                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button" onClick={() => setIsOpen(false)}>
                      Save
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </SheetContent>
        </Sheet>
      </div>
    </main>
  );
}
