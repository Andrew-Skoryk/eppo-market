import type { Metadata } from "next";

import Headings from "@/components/UI/Headings";
import CreateAnnouncementForm from "@/components/CreateAnnouncementForm";

export const metadata: Metadata = {
  title: "Анонси - Eppo",
  description: "Ця сторінка містить інтерфейс керування анонсами та новинами",
};

function Announcement() {

  return (
    <section className="flex flex-col gap-8">
      <Headings level={2}>Анонси сайту</Headings>

      <CreateAnnouncementForm />
    </section>
  );
}

export default Announcement;
