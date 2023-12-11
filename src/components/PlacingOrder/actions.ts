"use server";

import { db } from "@/lib/db";
import { z } from "zod";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function handlePlacingOrder(prevState: any, formData: FormData) {
    const schema = z.object({
    price: z.number()
      .min(1, "Вкажіть мінімальну суму замовлення!")
    });
  
    const parse = schema.safeParse({
    price: Number(formData.get("price"))
  });
  
  try {
    const data = await db.order.create({parse})
  } catch (error) {
    return {message: "Серверна помилка при створенні замовлення"}
  }
}
