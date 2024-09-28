import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2 m-5">
      <Input type="search" placeholder="Search for a card..." />
      <Button type="submit">
        <FaSearch />
      </Button>
    </div>
  );
}
