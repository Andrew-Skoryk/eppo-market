"server-only";
"use server";

import { db } from './db';

export async function saveAnnouncement(url: string) {
  await db.announcement.update({
    where: {
      name: "announcement",
    },
    data: {
      url
    }
  });

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
}
