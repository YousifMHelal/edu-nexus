import { Input } from "./ui/input";

const SearchBar = () => {
  return (
    <Input
      type="search"
      placeholder="Search..."
      className="hidden md:flex w-[400px] p-2 rounded-full"
    />
  );
};

export default SearchBar;
