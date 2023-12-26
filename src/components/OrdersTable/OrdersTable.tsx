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
import { useRouter } from "next/navigation";
import { getMoneyFormat } from "@/lib/utils";
import { statusColorMap } from "@/styles/statusColorMap";
import { OrderStatusesEnum } from "@/types/OrderStatusesEnum";
import { Order } from "@prisma/client";

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
    key: "name",
    label: "ІМ'Я",
  },
  {
    key: "totalSum",
    label: "СУМА",
  },
  {
    key: "city",
    label: "МІСТО",
  },
  {
    key: "createdAt",
    label: "ДАТА",
  },
];

function OrdersTable({ orders }: { orders: Order[] }) {
  const router = useRouter();

  const handleAction = (key: React.Key) => {
    router.push(`./orders/${key}`);
  };

  const renderCell = useCallback((order: Order, columnKey: keyof Order) => {
    const cellValue = order[columnKey];

    if (cellValue === null || cellValue === undefined) {
      return "—";
    }

    switch (columnKey) {
      case "totalSum":
        return getMoneyFormat(+cellValue);

      case "city":
        return order.city;

      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[order.status]}
            variant="shadow"
          >
            {OrderStatusesEnum[order.status]}
          </Chip>
        );

      case "createdAt":
        const date = new Date(cellValue as string);
        const formattedDate = date.toLocaleDateString("uk-UA", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Europe/Kiev",
        });

        return formattedDate;

      default:
        return String(cellValue);
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
        {orders.map(order => (
          <TableRow key={order.id}>
            {columnKey => (
              <TableCell className="text-left">
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
