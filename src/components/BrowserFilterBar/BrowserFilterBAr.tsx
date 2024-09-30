import BrowsePagination from "@/pages/browse/components/Pagination/BrowsePagination";
import BrowserFilter from "../BrowserFilter/BrowserFilter";
import { useEffect, useState } from "react";

interface BrowserFilterBarProps {
  setCardQueries: (queries: string) => void;
  cardQueries: string;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const BrowserFilterBar = ({
  cardQueries,
  setCardQueries,
  currentPage,
  setCurrentPage,
}: BrowserFilterBarProps) => {
  const [pageSize, setPageSize] = useState("100");
  const [color, setColor] = useState("");
  const [type, setType] = useState("");
  const [rarity, setRarity] = useState("");
  const [set, setSet] = useState("");

  useEffect(() => {
    setCardQueries(
      `&size=${pageSize}&page=${currentPage}&color=${color}&type=${type}&rarity=${rarity}&set=${set}`
    );
    console.log(cardQueries);
  }, [pageSize, currentPage, color, type, rarity, set]);

  const pageSizeFilter = ["10", "20", "50", "100"];
  const filterArray = [
    {
      name: "Color",
      filterContent: ["Red", "Blue", "Green", "White", "Black"],
      setFilter: setColor,
    },
    {
      name: "Type",
      filterContent: ["Creature", "Land", "Spell", "Enchantment", "Artifact"],
      setFilter: setType,
    },
    {
      name: "Rarity",
      filterContent: ["Common", "Uncommon", "Rare", "Mythic Rare"],
      setFilter: setRarity,
    },
    {
      name: "Set",
      filterContent: ["Core Set", "Modern Horizons", "Commander Legends"],
      setFilter: setSet,
    },
    {
      name: "Cards per page",
      filterContent: ["10", "20", "50", "100"],
      setFilter: setPageSize,
    },
  ];

  return (
    <div>
      <ul className="flex gap-4 flex-wrap justify-center">
        {filterArray.map((filter) => (
          <li key={filter.name}>
            <BrowserFilter
              filterName={filter.name}
              filterContent={filter.filterContent}
              setFilter={filter.setFilter}
            />
          </li>
        ))}
      </ul>
      <article className="flex flex-col gap-4 m-5 justify-center items-center">
        <BrowsePagination currentPage={currentPage} setPage={setCurrentPage} />
        <BrowserFilter
          filterName="size"
          filterContent={pageSizeFilter}
          setFilter={setPageSize}
        />
      </article>
    </div>
  );
};

export default BrowserFilterBar;
