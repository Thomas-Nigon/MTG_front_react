import BrowsePagination from "@/pages/browse/components/Pagination/BrowsePagination";
import BrowserFilter from "../BrowserFilter/BrowserFilter";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

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
    console.log("useEffect updated");
    console.log(color);
    setCardQueries(
      `&size=${pageSize}&page=${currentPage}&colors=${color}&type=${type}&rarity=${rarity}&set=${set}`
    );
    console.log(cardQueries);
  }, [pageSize, currentPage, color, type, rarity, set]);
  const resetFilters = () => {
    setColor("");
    setType("");
    setRarity("");
    setSet("");
    setPageSize("100");
    setCardQueries(
      `&size=${pageSize}&page=${currentPage}&colors=${color}&type=${type}&rarity=${rarity}&set=${set}`
    );
    window.location.reload();
  };
  const pageSizeFilter = [
    { name: "10", value: "10" },
    { name: "20", value: "20" },
    { name: "50", value: "50" },
    { name: "100", value: "100" },
  ];
  const filterArray = [
    {
      name: "Color",
      filterContent: [
        { name: "Red", value: "R" },
        { name: "Blue", value: "U" },
        { name: "Green", value: "G" },
        { name: "White", value: "W" },
        { name: "Black", value: "B" },
        { name: "All", value: "all" },
      ],

      setFilter: setColor,
    },
    /*    {
      name: "Type",
      filterContent: [
        { name: "Creature", value: "creature" },
        { name: "Land", value: "land" },
        { name: "Spell", value: "spell" },
        { name: "Enchantment", value: "enchantment" },
        { name: "Artifact", value: "artifact" },
      ],
      setFilter: setType,
    }, */
    {
      name: "Rarity",
      filterContent: [
        { name: "Common", value: "common" },
        { name: "Uncommon", value: "uncommon" },
        { name: "Rare", value: "rare" },
        { name: "Mythic Rare", value: "mythic" },
      ],
      setFilter: setRarity,
    },
    /*  {
      name: "Set",
      filterContent: [
        { name: "Core Set", value: "Core Set" },
        { name: "Modern Horizons", value: "Modern Horizons" },
        { name: "Commander Legends", value: "Commander Legends" },
      ],
      setFilter: setSet,
    }, */
    /*  {
      name: "Cards per page",
      filterContent: [
        { name: "10", value: "10" },
        { name: "20", value: "20" },
        { name: "50", value: "50" },
        { name: "100", value: "100" },
      ],
      setFilter: setPageSize,
    }, */
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
        <li>
          <Button onClick={resetFilters}>Reset Filters</Button>
        </li>
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
