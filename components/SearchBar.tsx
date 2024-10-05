"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";

const SearchBar = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (searchTerm.trim() === "") {
      params.delete("search");
    } else {
      params.set("search", searchTerm);
    }
    router.push(`${window.location.pathname}?${params}`);
  }, [searchTerm, router]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input
        type="search"
        placeholder="Search..."
        className="hidden md:flex w-[400px] p-2 rounded-full"
        value={searchTerm} // Controlled input
        onChange={handleChange} // Call handleChange on input change
      />
    </form>
  );
};

export default SearchBar;
