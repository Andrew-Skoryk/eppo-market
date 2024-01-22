import { unstable_cache as cache } from 'next/cache';
import { db } from './db';

async function fetchOrdersData(page: number) {
  const limit = 1;
  const offset = (page - 1) * limit;

  const data = await db.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: limit,
    skip: offset,
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

export const fetchOrders = cache(fetchOrdersData, ["orders"], { tags: ["orders", "countOrders"]});

async function countOrdersData() {
  return await db.order.count();
};

export const countOrders = cache(countOrdersData, ["countOrders"], { tags: ["countOrders"] });
