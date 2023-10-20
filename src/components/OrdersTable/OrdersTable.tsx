"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import { ordersTest } from "./ordersTest";

const columns = [
  {
    key: "NUMBER",
    label: "НОМЕР",
  },
  {
    key: "NAME",
    label: "ІМ'Я",
  },
  {
    key: "SUM",
    label: "СУМА",
  },
  {
    key: "STATUS",
    label: "СТАТУС",
  },
];

function OrdersTable() {
  return (
    <Table aria-label="Example empty table">
      <TableHeader columns={columns}>
        {column => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>

      <TableBody emptyContent={"Немає даних для відображення."}>
        {ordersTest.map(row => (
          <TableRow key={row.id}>
            {columnKey => <TableCell>{getKeyValue(row, columnKey)}</TableCell>}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default OrdersTable;
