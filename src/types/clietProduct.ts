import { Product } from "@prisma/client";

export type clientProduct = Omit<Product, "id">;
