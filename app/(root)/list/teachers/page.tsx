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
import { role, teachersData } from "@/lib/data";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type TeacherType = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const data = teachersData;

const tableRow = (item: TeacherType) => (
  <TableRow key={item.id}>
    <TableCell>
      <div className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </div>
    </TableCell>
    <TableCell className="hidden md:table-cell">{item.teacherId}</TableCell>
    <TableCell className="hidden md:table-cell">
      {item.subjects.join(", ")}
    </TableCell>
    <TableCell className="hidden md:table-cell">
      {item.classes.join(", ")}
    </TableCell>
    <TableCell className="hidden md:table-cell">{item.phone}</TableCell>
    <TableCell className="hidden md:table-cell">{item.address}</TableCell>
    <TableCell>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <Link href={`/list/teachers/${item.id}`}>
            <DropdownMenuItem>View</DropdownMenuItem>
          </Link>
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </TableCell>
  </TableRow>
);

const TeacherListPage = () => {
  return (
    <div className="p-4 rounded-md flex-1">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <SearchBar />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && <FormModal table="teacher" type="create" />}
          </div>
        </div>
      </div>

      {/* Table */}
      <TableList columns={columns} data={data} tableRow={tableRow} />

      {/* PAGINATION */}
      <ThePagination />
    </div>
  );
};

export default TeacherListPage;
