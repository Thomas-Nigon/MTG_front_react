import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BrowserFilterProps {
  filterName: string;
  filterContent: string[];
  setFilter: (filter: string) => void;
}
const handleChange = (value: string, setFilter: (filter: string) => void) => {
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
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};

export default BrowserFilter;
