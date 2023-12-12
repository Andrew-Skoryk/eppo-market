"use server";

import { db } from "@/lib/db";
import { z } from "zod";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function handlePlacingOrder(_prevState: any, formData: FormData) {
  const schema = z.object({
    phone: z.string(),
    name: z.string(),
    region: z.string(),
    city: z.string(),
    postOfficeNumber: z.string(),
    paymentType: z.string(),
    recipientLastName: z.string(),
    recipientFirstName: z.string(),
    recipientSurnameName: z.string().optional(),
    recipientPhone: z.string(),
  });

  const parseResult = schema.safeParse(Object.fromEntries(formData));

  if (!parseResult.success) {
    return { message: "Помилка валідації даних замовлення" };
  }

  try {
    const orderData = parseResult.data;
    const order = await db.order.create({ data: orderData });
    return { message: "Замовлення успішно створено", orderId: order.id };
  } catch (error) {
    console.error(error);
    return { message: "Серверна помилка при створенні замовлення" };
  }
}
