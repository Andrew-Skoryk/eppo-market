import { cache } from 'react';
import { db } from './db';

export const revalidate = 3600 // revalidate the data at most every hour

export const countItems = cache(async (category: string, subcategory: string) => {
  const itemCount = await db.product.count({
    where: {
      category: category,
      subcategory: subcategory
    }
  });

  return itemCount;
});
