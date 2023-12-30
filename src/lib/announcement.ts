"server-only";
"use server";

import { unstable_cache as cache, revalidateTag } from 'next/cache';
import { db } from './db';

export async function fetchAnnouncement() {
   const data = await db.announcement.findUnique({
    where: {
      name: "announcement",
      status: true,
    },
  });

  return data?.url;
}

export const fetchSettings = cache(fetchAnnouncement, ["announcement"], { tags: ["announcement"]});

export async function saveAnnouncement(url: string) {
  await db.announcement.update({
    where: {
      name: "announcement",
    },
    data: {
      url
    }
  });

  revalidateTag("announcement");
}

export async function changeAnnouncementStatus(status: boolean) {
  await db.announcement.update({
    where: {
      name: "announcement",
    },
    data: {
      status,
    }
  });

  revalidateTag("announcement");
}
