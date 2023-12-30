"server-only";
"use server";

import { unstable_cache as cache, revalidateTag } from 'next/cache';
import { db } from './db';

import { Announcement } from '@prisma/client';

export async function fetchAnnouncement() {
   const data = await db.announcement.findUnique({
    where: {
      name: "announcement",
    },
  }) as Announcement;

  return { url: data.url, status: data.status };
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
