import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BrowserFilterProps {
  filterName: string;
  filterContent: { name: string; value: string }[];
  setFilter: (filter: string) => void;
}
const handleChange = (value: string, setFilter: (filter: string) => void) => {
  console.log("clicked");
  console.log(value);
  setFilter(value);
};
const test = (value: string, setFilter: (filter: string) => void) => {
  console.log(value);
  setFilter(value);
};

const BrowserFilter = ({
  filterName,
  filterContent,
  setFilter,
}: BrowserFilterProps) => {
  return (
    <>
      <Select onValueChange={(value) => handleChange(value, setFilter)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={filterName} />
        </SelectTrigger>
        <SelectContent>
          {filterContent.map((item) => (
            <SelectItem
              onClick={() => test(item.value, setFilter)}
              key={item.name}
              value={item.value}
            >
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};

export default BrowserFilter;
