import { revalidateTag } from 'next/cache';
import { db } from "./db";

export async function deleteProduct(id: string) {
  const deletedProduct = await db.product.delete({
      where: {
        id,
      },
  });


  if (deletedProduct) {
    revalidateTag("products");
  }

  return deletedProduct;
}
