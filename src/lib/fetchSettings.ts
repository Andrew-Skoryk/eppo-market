import "server-only";
import { cache } from 'react';
import { db } from './db';

export const fetchSettings = cache(async (name: string) => {
  const data = await db.settings.findUnique({
    where: {
      name: name,
    }
  });

  console.log("Testing caching!");

  return data?.value;
});
