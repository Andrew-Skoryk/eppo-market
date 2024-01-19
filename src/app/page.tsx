import type { Metadata } from "next";

import { fetchMinOrderAmount } from "@/lib/fetchSettings";
import { fetchAnnouncement } from "@/lib/announcement";

import MinValueOrderBlock from "../components/MinValueOrderComp";
import MainCategoriesBlock from "../components/MainCategoriesBlock";
import AnnouncementBlock from "@/components/AnnouncementBlock";

export const revalidate = 3600 * 24;

export const metadata: Metadata = {
  title: "Домашня сторінка - Eppo",
  description: "Це домашня сторінка на eppo.com.ua",
};

async function Home() {
  const minOrderAmount = await fetchMinOrderAmount();
  const announcement = await fetchAnnouncement();

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-8">
      <MinValueOrderBlock minOrderAmount={minOrderAmount} />

      {announcement.status && <AnnouncementBlock url={announcement.url!} />}

      <MainCategoriesBlock />
    </div>
  );
}

export default Home;
