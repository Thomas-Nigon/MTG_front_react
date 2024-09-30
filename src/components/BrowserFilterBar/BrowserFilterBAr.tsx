import BrowserFilter from "../BrowserFilter/BrowserFilter";

const BrowserFilterBar = () => {
  const filterArray = [
    {
      name: "Color",
      filterContent: ["Red", "Blue", "Green", "White", "Black"],
    },
    {
      name: "Type",
      filterContent: ["Creature", "Land", "Spell", "Enchantment", "Artifact"],
    },
    {
      name: "Rarity",
      filterContent: ["Common", "Uncommon", "Rare", "Mythic Rare"],
    },
    {
      name: "Set",
      filterContent: ["Core Set", "Modern Horizons", "Commander Legends"],
    },
  ];

  return (
    <div>
      <ul className="flex flex-row gap-4">
        {filterArray.map((filter) => (
          <li key={filter.name}>
            <BrowserFilter
              filterName={filter.name}
              filterContent={filter.filterContent}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowserFilterBar;
