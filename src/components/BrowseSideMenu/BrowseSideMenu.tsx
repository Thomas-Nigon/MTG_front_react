import { IoIosWarning, IoIosTrash } from "react-icons/io";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";

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
import { CardInterface } from "@/types-d";

interface BrowseSideMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  currentDeck: CardInterface[];
  setCurrentDeck: (currentDeck: CardInterface[]) => void;
  RemoveCard: (card: CardInterface) => void;
}

const BrowseSideMenu = ({
  isOpen,
  setIsOpen,
  currentDeck,
  setCurrentDeck,
  RemoveCard,
}: BrowseSideMenuProps) => {
  return (
    <>
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
                      setCurrentDeck(
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
    </>
  );
};

export default BrowseSideMenu;
