import { Input } from "@/components/ui/input";
import { searchCard } from "@/lib/searchCard";
import { useState } from "react";
import { CardInterface } from "@/types-d";

export default function Search() {
  const [searchResults, setSearchResults] = useState<CardInterface[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [currentCard, setCurrentCard] = useState<CardInterface | null>(null);
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    try {
      const results = await searchCard(e.target.value);
      const data = await results;
      setSearchResults(data);
      setCurrentCard(searchResults[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md items-center space-x-2 ">
      <article className="flex w-full mt-5 ">
        <Input
          onChange={handleSearch}
          type="search"
          placeholder="Search for a card..."
          onFocus={() => setIsFocused(true)}
          value={inputValue}
        />
      </article>
      <ul className="flex flex-col w-full  m-0 z-10">
        {searchResults &&
          isFocused &&
          searchResults.map((card) => (
            <li
              className="hover:bg-gray-100 hover:text-black p-1 cursor-pointer "
              key={card.id}
              onClick={() => {
                console.log("click");
                setInputValue(card.name);
                setCurrentCard(card);
                setIsFocused(false);
              }}
            >
              {card.name}
            </li>
          ))}
      </ul>

      <img
        className="mt-10 max-w-80 "
        src={currentCard?.image_uris.normal}
        alt={currentCard?.name}
      />
    </div>
  );
}
