import { Address } from "./Address";
import { OrderStatuses } from "./OrderStatuses";

export type Order = {
  id: number,
  useId: string,
  phoneNumber: string,
  itemsId: string[],
  totalSum: number,
  userName: string,
  date: string,
  status: OrderStatuses,
  address: Address,
};