import type { Metadata } from "next";
import { db } from "@/lib/db";

import ProductsList from "@/components/ProductsList";
import Headings from "@/components/UI/Headings";

export const metadata: Metadata = {
  title: "Пошук товару - Eppo",
  description:
    "Сторінка відображення результатів пошуку товарів інтернет-магазину eppo.com.ua",
};

async function SearchPage({ params }: { params: { slug: string } }) {
  "use server";
  const query = decodeURIComponent(params.slug).toUpperCase();
  const products = await db.product.findMany({
    where: {
      article: { contains: query },
    },
  });

  if (products.length === 0) {
    return <Headings level={1}>На жаль, жодного товару не знайдено</Headings>;
  }

  return (
    <section>
      <ProductsList products={products} additionalFunctionality />
    </section>
  );
}

export default SearchPage;
