"use client";

import { useCallback } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from "@nextui-org/react";
import { ordersTest } from "./ordersTest";
import { useRouter } from "next/navigation";
import { Order } from "@/types/Order";
import { getMoneyFormat } from "@/lib/utils";
import { statusColorMap } from "@/styles/statusColorMap";

const columns = [
  {
    key: "id",
    label: "НОМЕР",
  },
  {
    key: "status",
    label: "СТАТУС",
  },
  {
    key: "userName",
    label: "ІМ'Я",
  },
  {
    key: "totalSum",
    label: "СУМА",
  },
  {
    key: "address",
    label: "МІСТО",
  },
  {
    key: "date",
    label: "ДАТА",
  },
];

function OrdersTable() {
  const router = useRouter();

  const handleAction = (key: React.Key) => {
    router.push(`./orders/${key}`);
  };

  const renderCell = useCallback((order: Order, columnKey: keyof Order) => {
    const cellValue = order[columnKey];

    switch (columnKey) {
      case "totalSum":
        return getMoneyFormat(+cellValue);

      case "address":
        return order.address.city;

      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[order.status]}
            variant="shadow"
          >
            {order.status}
          </Chip>
        );

      default:
        if (typeof cellValue === "string" || typeof cellValue === "number") {
          return cellValue;
        } else {
          console.error(
            `Invalid cell value for column ${columnKey}:`,
            cellValue,
          );
          return null;
        }
    }
  }, []);

  return (
    <Table
      aria-label="Таблиця замовлень магазину"
      isStriped
      isHeaderSticky
      selectionMode="single"
      selectionBehavior="replace"
      color="secondary"
      onRowAction={handleAction}
    >
      <TableHeader columns={columns}>
        {column => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>

      <TableBody emptyContent={"Немає даних для відображення."}>
        {ordersTest.map(order => (
          <TableRow key={order.id}>
            {columnKey => (
              <TableCell>
                {renderCell(order, columnKey as keyof Order)}
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default OrdersTable;
