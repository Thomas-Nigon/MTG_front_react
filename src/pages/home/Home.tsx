import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Search from "@/components/Search/Search";

export default function Home() {
  const color = useSelector((state: RootState) => state.filterColor.list);
  console.log(color);

  return (
    <main className="mt-20 p-2 flex flex-col justify-center items-center ">
      <h2>Welcome to my magic side project</h2>
      <p>
        Here you can look for a specific card, browse hundreds of collections
        and make your own deck if you create an{" "}
        <span className="text-[hsl(var(--primary))]">Account</span>
      </p>
      <Search />
    </main>
  );
}
