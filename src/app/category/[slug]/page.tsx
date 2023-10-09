"use client";

import ProductsList from "@/components/ProductsList";
import { useParams } from "next/navigation";

function CategoryPage() {
  const params = useParams();

  return (
    <section className="text-center p-4">
      Тут буде результат вашого пошуку по{" "}
      <span className="font-semibold text-blue-700">{params.slug}</span>
      <ProductsList />
    </section>
  );
}

export default CategoryPage;
