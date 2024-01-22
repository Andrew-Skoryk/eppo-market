"server-only";
"use server";

import { revalidateTag } from "next/cache";
import { OrderStatuses } from "@prisma/client";
import { db } from "./db";

export async function updateOrderStatus(id: number, status: OrderStatuses) {
  const order = await db.order.update({
    where: { id },
    data: { status },
  });

  if (order) {
      revalidateTag("orders");
  }
}
