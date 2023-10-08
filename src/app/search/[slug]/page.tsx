"use client";

import { useParams } from "next/navigation";

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
