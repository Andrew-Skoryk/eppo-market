import { testProduct } from "./testProduct";

export interface CartItem extends testProduct {
  quantity: number;
}