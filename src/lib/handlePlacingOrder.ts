"server-only";
"use server";

import { revalidateTag } from "next/cache";
import { OrderFormData } from '@/components/PlacingOrder/PlacingOrder';
import { db } from './db';
import { OrderStatuses } from '@prisma/client';
import { CartItem } from '@/types/CartItem';
import { sendEmail } from "./sendEmail";

export async function handlePlacingOrder(formData: OrderFormData,  products: CartItem[],totalSum: number, userId?: string) {
  const { phone, name, region, city, postOfficeNumber, paymentType, recipientLastName, recipientFirstName, recipientSurnameName, recipientPhone, comment } = formData;

  const items = JSON.stringify(products);

  const orderData = {
    status: "new" as OrderStatuses,
    phone,
    name,
    region,
    city,
    postOfficeNumber,
    paymentType,
    recipientLastName,
    recipientFirstName,
    recipientSurnameName,
    recipientPhone,
    items,
    totalSum,
    comment,
    userId,
  };

  const order = await db.order.create({ data: orderData });

  sendEmail(order);
  revalidateTag("orders");

  return order;
}
