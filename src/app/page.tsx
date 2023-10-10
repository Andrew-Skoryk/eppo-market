import MinValueOrderComp from "../components/MinValueOrderComp";
import MainCategoriesBlock from "../components/MainCategoriesBlock";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Домашня сторінка - Eppo",
  description: "Це домашня сторінка на eppo.com.ua",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <MinValueOrderComp />
      <MainCategoriesBlock />
    </div>
  );
}
