import { CardInterface } from "@/types-d";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

interface SingleCardProps {
  card: CardInterface;
  addCard: (card: CardInterface) => void;
}

const SingleCard = ({ card, addCard }: SingleCardProps) => {
  return (
    <article key={card.id + card.name}>
      <Card className="w-[300px] bg-accent">
        <CardHeader>
          <CardTitle>{card.name}</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <img src={card.image_uris.normal} alt={card.name} />
        </CardContent>
        <CardFooter className="flex justify-center ">
          <Button className="w-32" onClick={() => addCard(card)}>
            Add to your deck
          </Button>
        </CardFooter>
      </Card>
    </article>
  );
};

export default SingleCard;
