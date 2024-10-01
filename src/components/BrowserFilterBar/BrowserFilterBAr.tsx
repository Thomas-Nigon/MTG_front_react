import BrowsePagination from "@/pages/browse/components/Pagination/BrowsePagination";
import BrowserFilter from "../BrowserFilter/BrowserFilter";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

interface BrowserFilterBarProps {
  setCardQueries: (queries: string) => void;
  cardQueries: string;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pageCount: number;
}

const BrowserFilterBar = ({
  cardQueries,
  setCardQueries,
  currentPage,
  setCurrentPage,
  pageCount,
}: BrowserFilterBarProps) => {
  const [pageSize, setPageSize] = useState("100");
  const [color, setColor] = useState("");
  const [type, setType] = useState("");
  const [rarity, setRarity] = useState("");
  const [set, setSet] = useState("");

  useEffect(() => {
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

  const rarityFilter = useSelector(
    (state: RootState) => state.filterRarity.list
  );
  const colorFilter = useSelector((state: RootState) => state.filterColor.list);
  const filterArray = [
    {
      name: "Color ",
      filterContent: colorFilter,
      setFilter: setColor,
    },

    {
      name: "Rarity",
      filterContent: rarityFilter,
      setFilter: setRarity,
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
        <li>
          <Button onClick={resetFilters}>Reset Filters</Button>
        </li>
      </ul>
      <article className="flex flex-col gap-4 m-5 justify-center items-center">
        <BrowsePagination
          currentPage={currentPage}
          setPage={setCurrentPage}
          pageCount={pageCount}
        />
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
