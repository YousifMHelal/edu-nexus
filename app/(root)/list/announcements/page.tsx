import FormModal from "@/components/FormModal";
import { ThePagination } from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";
import TableList from "@/components/TableList";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TableCell, TableRow } from "@/components/ui/table";
import { announcementsData, role } from "@/lib/data";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";

type AnnouncementType = {
  id: number;
  title: string;
  class: string;
  date: string;
};

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const data = announcementsData;

const tableRow = (item: AnnouncementType) => (
  <TableRow key={item.id}>
    <TableCell className="flex items-center gap-4 p-4">{item.title}</TableCell>
    <TableCell>{item.class}</TableCell>
    <TableCell className="hidden md:table-cell">{item.date}</TableCell>
    <TableCell>
      <div className="flex items-center gap-2">
        {role === "admin" && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </TableCell>
  </TableRow>
);

const AnnouncementListPage = () => {
  return (
    <div className="p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">
          All Announcements
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <SearchBar />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && <FormModal table="teacher" type="create" />}
          </div>
        </div>
      </div>
      {/* LIST */}
      <TableList columns={columns} data={data} tableRow={tableRow} />
      {/* PAGINATION */}
      <ThePagination />
    </div>
  );
};

export default AnnouncementListPage;
