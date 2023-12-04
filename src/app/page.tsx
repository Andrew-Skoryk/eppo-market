import type { Metadata } from "next";

import { fetchSettings } from "@/lib/fetchSettings";

import MinValueOrderBlock from "../components/MinValueOrderComp";
import MainCategoriesBlock from "../components/MainCategoriesBlock";

export const revalidate = 3600 * 24;

export const metadata: Metadata = {
  title: "Домашня сторінка - Eppo",
  description: "Це домашня сторінка на eppo.com.ua",
};

async function Home() {
  const minOrderAmount = await fetchSettings("minOrderAmount");

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-8">
      <MinValueOrderBlock minOrderAmount={minOrderAmount} />

      <MainCategoriesBlock />
    </div>
  );
}

export default Home;
