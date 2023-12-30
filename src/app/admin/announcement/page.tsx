import type { Metadata } from "next";

import { fetchAnnouncement } from "@/lib/announcement";

import Headings from "@/components/UI/Headings";
import CreateAnnouncementForm from "@/components/CreateAnnouncementForm";
import AnnouncementSwitcher from "@/components/AnnouncementSwitcher";

export const metadata: Metadata = {
  title: "Анонси - Eppo",
  description: "Ця сторінка містить інтерфейс керування анонсами та новинами",
};

async function Announcement() {
  const announcement = await fetchAnnouncement();

  return (
    <section className="flex flex-col gap-8">
      <Headings level={2}>Анонси сайту</Headings>

      <CreateAnnouncementForm />

      <AnnouncementSwitcher announcement={announcement} />
    </section>
  );
}

export default Announcement;
