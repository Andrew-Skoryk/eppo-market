"use client";

import React from "react";

import { formatDate, getMoneyFormat } from "@/lib/utils";
import { updateOrderStatus } from "@/lib/updateOrderStatus";

import { statusColorMap } from "@/styles/statusColorMap";
import { OrderStatusesEnum } from "@/types/OrderStatusesEnum";
import { Order, OrderStatuses } from "@prisma/client";
import { CartItem } from "@/types/CartItem";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
  Select,
  SelectItem,
} from "@nextui-org/react";
import OrderProductCard from "../OrderProductCard";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  order: Order;
};

const statuses: OrderStatuses[] = ["new", "inProgress", "done"];

const AdminOrderCard = ({ order }: Props) => {
  const [value, setValue] = React.useState<OrderStatuses>(order.status);

  const handleSelectionChange = async (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const value = e.target.value as OrderStatuses;

    if (value === order.status || !value) {
      toast.error("Статус замовлення не потребує змін");
      return;
    }

    try {
      await updateOrderStatus(order.id, value);
      toast.success("Статус замовлення успішно змінено");
      setValue(e.target.value as OrderStatuses);
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Помилка при зміні статуса замовлення",
      );
    }
  };

  const products: CartItem[] = JSON.parse(order.items as string);

  return (
    <Card
      shadow="md"
      radius="lg"
      className="z-0 overflow-hidden border border-gray-300"
      fullWidth
    >
      <CardHeader className="flex items-center justify-between p-4 text-white bg-indigo-400">
        <div>
          <p className="text-xl font-semibold">
            Замовлення #{order.id} від
            <span className="text-amber-400"> {order.name}</span>
          </p>
          <p className="mt-1 text-sm underline underline-offset-2">
            Телефон: {order.phone}
          </p>
        </div>

        <Select
          items={statuses}
          label="Статус замовлення"
          labelPlacement="outside-left"
          selectedKeys={[value]}
          onChange={handleSelectionChange}
          className="flex flex-col max-w-xs"
          variant="underlined"
          renderValue={items => {
            return items.map(_ => (
              <Chip
                className="capitalize"
                color={statusColorMap[value]}
                variant="shadow"
                key={value}
              >
                {OrderStatusesEnum[value]}
              </Chip>
            ));
          }}
        >
          {statuses.map(item => (
            <SelectItem key={item} textValue={OrderStatusesEnum[item]}>
              <Chip
                className="capitalize "
                color={statusColorMap[item]}
                variant="shadow"
              >
                {OrderStatusesEnum[item]}
              </Chip>
            </SelectItem>
          ))}
        </Select>
      </CardHeader>

      <CardBody className="p-4 bg-white">
        <p className="mb-2">Замовник: {order.name}</p>
        <p className="mb-2">Дата: {formatDate(order.createdAt)}</p>
        <p className="mb-2 font-medium">Адреса доставки:</p>
        <div className="pl-5 mb-2">
          <p>
            Ім&apos;я отримувача:{" "}
            {`${order.recipientLastName} ${order.recipientFirstName} ${order.recipientSurnameName}`}
          </p>
          <p>Телефон отримувача: {order.recipientPhone}</p>
          <p>Місто: {order.city}</p>
          <p>Номер відділення: {order.postOfficeNumber}</p>
        </div>
        <p className="font-medium">Товари:</p>
        <ul className="pl-5 list-decimal list-inside">
          {products.map(product => (
            <OrderProductCard key={product.id} item={product} />
          ))}
        </ul>
      </CardBody>

      <CardFooter className="flex justify-between p-4 bg-gray-100">
        <p className="font-semibold text-gray-700">Загальна сума:</p>
        <p className="pr-4 text-lg font-semibold">
          {getMoneyFormat(order.totalSum)}
        </p>
      </CardFooter>

      <Toaster
        position="bottom-center"
        containerStyle={{
          bottom: "75px",
        }}
      />
    </Card>
  );
};

export default AdminOrderCard;
