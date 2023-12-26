"use server";

import { db } from "./db";

export async function findOrder(
  orderId: number
) {
  const order = await db.order.findUnique({
    where: { id: orderId },
  });

  return order;
}
