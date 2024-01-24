import { Order } from "@prisma/client";

export interface AdminOrderSubset extends Pick<Order, "id" | "status" | "name" | "totalSum" | "city" | "createdAt" | "paymentType"> { }
