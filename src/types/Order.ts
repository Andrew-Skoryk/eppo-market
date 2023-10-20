import { Address } from "./Address";

export type Order = {
  id: number,
  useId: string,
  phoneNumber: string,
  itemsId: string[],
  totalSum: number,
  userName: string,
  date: string,
  status: "new" | "done",
  address: Address
};