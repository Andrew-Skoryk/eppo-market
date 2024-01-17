import type { Metadata } from "next";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { checkIfAdmin } from "@/lib/checkIfAdmin";

import Headings from "@/components/UI/Headings";
import DisplaySearchResult from "@/components/DisplaySearchResult";

export const metadata: Metadata = {
  title: "Пошук товару - Eppo",
  description:
    "Сторінка відображення результатів пошуку товарів інтернет-магазину eppo.com.ua",
};

async function SearchPage({ params }: { params: { slug: string } }) {
  "use server";
  const user = await currentUser();
  let additionalFunctionality = false;

  if (user) {
    additionalFunctionality = await checkIfAdmin(user.id);
  }

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
    <DisplaySearchResult
      products={products}
      additionalFunctionality={additionalFunctionality}
    />
  );
}

export default SearchPage;
