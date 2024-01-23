"server-only";
"use server";

import { db } from "./db";

export async function fetchUserOrders(id: string) {
  return await db.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      userId: id,
    },
  });
}
