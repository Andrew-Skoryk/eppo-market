"use client";

import type { Metadata } from "next";
import { useParams } from "next/navigation";

export const metadata: Metadata = {
  title: "Пошук товару на Eppo",
  description: "Результат пошуку товару за кодом на eppo.com.ua",
};

function SearchPage() {
  const params = useParams();

  return (
    <section className="text-center p-4">
      Тут буде результат вашого пошуку по{" "}
      <span className="font-semibold text-blue-700">{params.slug}</span>
    </section>
  );
}

export default SearchPage;
