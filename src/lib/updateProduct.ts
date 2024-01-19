"server-only";
"use server";

import { revalidateTag } from 'next/cache';
import { db } from "./db";
import { clientProduct } from '@/types/clietProduct';

export async function updateProduct(id: string, data: clientProduct) {
  const updatedProduct = await db.product.update({
    where: {
      id
    },
    data,
  });

  if (updatedProduct) {
    revalidateTag("products");
  }

  return updatedProduct;
}
