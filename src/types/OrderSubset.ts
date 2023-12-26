import { Order } from "@prisma/client";

export interface OrderSubset extends Pick<Order, 'id' | 'status' | 'name' | 'totalSum' | 'city' | 'createdAt'> { }
