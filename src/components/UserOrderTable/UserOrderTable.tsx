"use client";

import { useCallback, useState } from "react";

import { formatDate, getMoneyFormat } from "@/lib/utils";

import { Order } from "@prisma/client";
import { OrderStatusesEnum } from "@/types/OrderStatusesEnum";
import { OrderPaymentEnum } from "@/types/OrderPaymentEnum";
import { statusColorMap } from "@/styles/statusColorMap";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import UserOrderCard from "../UserOrderCard";

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
  {
    key: "userId",
    labe: "ДЕТАЛІ",
  },
];

function UserOrderTable({ orders }: { orders: Order[] }) {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

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

        case "userId":
          return (
            <Button
              size="sm"
              color="default"
              onClick={() => setSelectedOrder(order)}
            >
              Деталі
            </Button>
          );

        default:
          return String(cellValue);
      }
    },
    [],
  );

  return (
    <>
      <Table
        aria-label="Історія замовлень"
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

      {selectedOrder && (
        <Modal
          size="3xl"
          isOpen={!!selectedOrder}
          onClose={() => setSelectedOrder(null)}
        >
          <ModalContent className="max-h-[93vh] overflow-y-auto">
            <ModalHeader className="self-center text-2xl">{`Деталі замовлення`}</ModalHeader>
            <ModalBody>
              <UserOrderCard order={selectedOrder} />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}

export default UserOrderTable;
