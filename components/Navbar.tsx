import { UserButton } from "@clerk/nextjs";
import { Input } from "./ui/input";
import { currentUser } from "@clerk/nextjs/server";

const Navbar = async () => {
  const user = await currentUser();

  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <Input
        type="search"
        placeholder="Search..."
        className="hidden md:flex max-w-[300px] p-2 rounded-full"
      />
      {/* ICONS AND USER */}
      <div className="flex items-center gap-3 justify-end w-full">
        <div className="flex flex-col">
          <span className="text-s leading-4 font-bold">{user?.fullName}</span>
          <span className="text-[12px] text-gray-500 text-right">
            {user?.publicMetadata?.role as string}
          </span>
        </div>
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
