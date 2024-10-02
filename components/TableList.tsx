import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TableList = ({
  columns,
  data,
  tableRow,
}: {
  columns: { header: string; accessor: string; className?: string }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tableRow: any;
}) => {
  return (
    <div className="w-full mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map(({ header, accessor, className }) => (
              <TableHead key={accessor} className={className}>
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>{data.map((row) => tableRow(row))}</TableBody>
      </Table>
    </div>
  );
};

export default TableList;
