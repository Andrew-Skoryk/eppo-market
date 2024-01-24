"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

import { formatDate, getMoneyFormat } from "@/lib/utils";
import { OrderStatusesEnum } from "@/types/OrderStatusesEnum";
import { AdminOrderSubset } from "@/types/AdminOrderSubset";
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

function AdminOrdersTable({ orders }: { orders: AdminOrderSubset[] }) {
  const router = useRouter();

  const handleAction = (key: React.Key) => {
    router.push(`./orders/${key}`);
  };

  const renderCell = useCallback(
    (order: AdminOrderSubset, columnKey: keyof AdminOrderSubset) => {
      const cellValue = order[columnKey];

      if (cellValue === null || cellValue === undefined) {
        return "—";
      }

      switch (columnKey) {
        case "totalSum":
          return getMoneyFormat(+cellValue);

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
          const dateValue = new Date(cellValue);
          return formatDate(dateValue);
        default:
          return String(cellValue);
      }
    },
    [],
  );

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
                {renderCell(order, columnKey as keyof AdminOrderSubset)}
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default AdminOrdersTable;
