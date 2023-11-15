import { Product } from "@prisma/client";

export interface CartItem extends Product {
  quantity?: number;
  cartSizes?: Array<{ size: number; quantity: number }>;
}
