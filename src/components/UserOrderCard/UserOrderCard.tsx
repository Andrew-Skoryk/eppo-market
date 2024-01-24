"use client";

import React from "react";

import { formatDate, getMoneyFormat } from "@/lib/utils";

import { statusColorMap } from "@/styles/statusColorMap";
import { OrderStatusesEnum } from "@/types/OrderStatusesEnum";
import { Order } from "@prisma/client";
import { CartItem } from "@/types/CartItem";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
} from "@nextui-org/react";
import OrderProductCard from "../OrderProductCard";

type Props = {
  order: Order;
};

const UserOrderCard = ({ order }: Props) => {
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
          <p className="mb-2">Дата: {formatDate(order.createdAt)}</p>

          <p className="mb-2">Замовник: {order.name}</p>

          <p className="mt-1 text-sm underline underline-offset-2">
            Телефон: {order.phone}
          </p>

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
        </div>

        <Chip
          className="capitalize"
          color={statusColorMap[order.status]}
          variant="shadow"
        >
          {OrderStatusesEnum[order.status]}
        </Chip>
      </CardHeader>

      <CardBody className="p-4 bg-white">
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
    </Card>
  );
};

export default UserOrderCard;
