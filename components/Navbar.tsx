import Image from "next/image";
import { Input } from "./ui/input";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <Input type="search" placeholder="Search..." className="hidden md:flex max-w-[300px] p-2 rounded-full"/>
      {/* ICONS AND USER */}
      <div className="flex items-center gap-3 justify-end w-full">
        <div className="flex flex-col">
          <span className="text-s leading-4 font-bold">John Doe</span>
          <span className="text-[12px] text-gray-500 text-right">Admin</span>
        </div>
        <Image
          src="/avatar.png"
          alt=""
          width={42}
          height={42}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
