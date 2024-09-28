import { CardInterface } from "@/types-d";
import { v4 as uuidv4 } from "uuid";

interface BrowseSidebarProps {
  deck: CardInterface[];
}

const BrowseSidebar = ({ deck }: BrowseSidebarProps) => {
  return (
    <div>
      <h2>Your deck:</h2>
      <ul>{deck && deck.map((card) => <li key={uuidv4()}>{card.name}</li>)}</ul>
    </div>
  );
};

export default BrowseSidebar;
