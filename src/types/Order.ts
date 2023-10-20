export type Order = {
  id: number,
  useId: string,
  itemsId: string[],
  totalSum: number,
  userName: string,
  date: Date,
  status: "new" | "done",
};