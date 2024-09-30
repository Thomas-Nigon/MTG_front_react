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
}

const BrowserFilter = ({ filterName, filterContent }: BrowserFilterProps) => {
  return (
    <>
      <Select>
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
