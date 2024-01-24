"use client";

import { useCallback } from "react";

import { Order } from "@prisma/client";
import { OrderStatusesEnum } from "@/types/OrderStatusesEnum";
import { statusColorMap } from "@/styles/statusColorMap";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from "@nextui-org/react";

import { formatDate, getMoneyFormat } from "@/lib/utils";
import { OrderPaymentEnum } from "@/types/OrderPaymentEnum";

const columns = [
  {
    key: "id",
    label: "№",
  },
  {
    key: "createdAt",
    label: "ДАТА",
  },
  {
    key: "totalSum",
    label: "СУМА",
  },
  {
    key: "paymentType",
    label: "ОПЛАТА",
  },
  {
    key: "city",
    label: "МІСТО",
  },
  {
    key: "postOfficeNumber",
    label: "ПОШТА",
  },
  {
    key: "status",
    label: "СТАТУС",
  },
];

function UserOrderTable({ orders }: { orders: Order[] }) {
  const renderCell = useCallback(
    (order: Order, columnKey: keyof Order, index: number) => {
      const cellValue = order[columnKey];

      if (cellValue === null || cellValue === undefined) {
        return "—";
      }

      switch (columnKey) {
        case "id":
          return index + 1;

        case "createdAt":
          return formatDate(cellValue as Date);

        case "totalSum":
          return getMoneyFormat(+cellValue);
        
        case "paymentType":
          return OrderPaymentEnum[cellValue as keyof typeof OrderPaymentEnum];

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

        default:
          return String(cellValue);
      }
    },
    [],
  );

  return (
    <Table
      aria-label="Історія замовлень"
      isStriped
      isHeaderSticky
      selectionMode="single"
      selectionBehavior="replace"
      color="secondary"
    >
      <TableHeader columns={columns}>
        {column => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>

      <TableBody emptyContent={"У Вас немає замовлень"}>
        {orders.map((order, index) => (
          <TableRow key={order.id}>
            {columnKey => (
              <TableCell className="text-left">
                {renderCell(order, columnKey as keyof Order, index)}
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default UserOrderTable;
