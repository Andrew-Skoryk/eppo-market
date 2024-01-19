import { unstable_cache as cache } from 'next/cache';;
import { db } from './db';

async function fetchMinOrderAmountData() {
  const data = await db.settings.findUnique({
    where: {
      name: "minOrderAmount",
    },
  });

  return data?.value;
}

async function fetchExchangeRateData() {
  const data = await db.settings.findUnique({
    where: {
      name: "exchangeRate",
    },
  });

  return data?.value;
}

export const fetchMinOrderAmount = cache(fetchMinOrderAmountData, ["minOrderAmount"], { tags: ["settings", "minOrderAmount"]});

export const fetchExchangeRate = cache(fetchExchangeRateData, ["exchangeRate"], { tags: ["settings", "exchangeRate"] });
