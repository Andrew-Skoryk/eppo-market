import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Пошук товарів - Eppo",
  description:
    "Сторінка відображення результатів пошуку товарів інтернет-магазину eppo.com.ua",
};

function SearchPageComp({ params }: { params: string }) {
  return (
    <>
      <span className="font-semibold text-blue-700">{params}</span>
    </>
  );
}

export default SearchPageComp;
