import { unstable_cache as cache } from 'next/cache';;
import { db } from './db';

async function fetchData(name: string) {
  const data = await db.settings.findUnique({
    where: {
      name: name,
    },
  });

  return data?.value;
}

export const fetchSettings = cache(fetchData, ["settings"], { tags: ["settings"]});
