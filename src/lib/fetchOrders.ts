import { unstable_cache as cache } from 'next/cache';;
import { db } from './db';

export async function fetchOrders() {
  const data = await db.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      status: true,
      name: true,
      totalSum: true,
      city: true,
      createdAt: true,
    }
  });

  return data;
}

export const fetchSettings = cache(fetchOrders, ["orders"], { tags: ["orders"]});
