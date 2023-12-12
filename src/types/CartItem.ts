import { Product } from "@prisma/client";

export interface CartItem extends Omit<Product, 'sizes'> {
  quantity?: number;
  ringSizes?: Array<{ size: number; quantity: number }>;
}
