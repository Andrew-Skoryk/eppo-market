import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { Order } from "@/types/Order";
import { getMoneyFormat } from "@/lib/utils";
import { statusColorMap } from "@/styles/statusColorMap";
import { OrderStatuses } from "@/types/OrderStatuses";

type Props = {
  order: Order;
};

const statuses: OrderStatuses[] = ["new", "done"];

const OrderCard = ({ order }: Props) => {
  const [value, setValue] = React.useState<OrderStatuses>(order.status);

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e);
    setValue(e.target.value as OrderStatuses);
  };

  return (
    <Card
      shadow="md"
      radius="lg"
      className="z-0 overflow-hidden border border-gray-300 aspect-square"
      fullWidth
    >
      <CardHeader className="flex items-center justify-between p-4 text-white bg-indigo-400">
        <div>
          <p className="text-xl font-semibold">
            Замовлення #{order.id} від
            <span className="text-amber-400"> {order.userName}</span>
          </p>
          <p className="mt-1 text-sm underline underline-offset-2">
            Телефон: {order.phoneNumber}
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
            return items.map(_item => (
              <Chip
                className="capitalize"
                color={statusColorMap[value]}
                variant="shadow"
                key={value}
              >
                {value}
              </Chip>
            ));
          }}
        >
          <SelectItem key="new" textValue="new">
            <Chip
              className="capitalize "
              color={statusColorMap.new}
              variant="shadow"
            >
              new
            </Chip>
          </SelectItem>

          <SelectItem key="done" textValue="done">
            <Chip
              className="capitalize"
              color={statusColorMap.done}
              variant="shadow"
            >
              done
            </Chip>
          </SelectItem>
        </Select>
      </CardHeader>
      <CardBody className="p-4 bg-white">
        <p className="mb-2">Замовник: {order.userName}</p>
        <p className="mb-2">Дата: {order.date}</p>
        <p className="mb-2 font-medium">Адреса доставки:</p>
        <div className="pl-5 mb-2">
          <p>Ім&apos;я отримувача: {order.address.name}</p>
          <p>Телефон отримувача: {order.address.receiverPhoneNumber}</p>
          <p>Місто: {order.address.city}</p>
          <p>Служба доставки: {order.address.delivery}</p>
          <p>Номер відділення: {order.address.postOfficeNumber}</p>
        </div>
        <p className="font-medium">Товари:</p>
        <ul className="pl-5 list-decimal list-inside">
          {order.itemsId.map(itemId => (
            <li key={itemId} className="text-gray-600">
              {itemId}
            </li>
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

export default OrderCard;
