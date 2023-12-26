import { unstable_cache as cache } from 'next/cache';;
import { db } from './db';

async function fetchOrders() {
 const data = await db.order.findMany();

  return data;
}

export const fetchSettings = cache(fetchOrders, ["orders"], { tags: ["orders"]});
