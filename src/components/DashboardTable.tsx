import { Column } from "react-table";
import TableHOC from "./TableHOC";


interface DataType {
  id: string;
  quantity: number;
  discount: number;
  amount: number;
  status: string;
}

const columns: Column<DataType>[] = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

const DashboardTable = ({ data = [] } : { data: DataType[] }) => {
  // return TableHOC<DataType>(
  //   columns,
  //   data,
  //   "transactionBox",
  //   "Top Transaction"
  // )();
  // calling this element by () so that it will return a jsx element

  const TableComponent = TableHOC<DataType>(columns, data, "transaction-box", "Top Transaction");
  
  // Render the new component
  return <TableComponent />;
};

export default DashboardTable;