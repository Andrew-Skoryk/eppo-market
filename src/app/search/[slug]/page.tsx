import type { Metadata } from "next";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { checkIfAdmin } from "@/lib/checkIfAdmin";
import { fetchExchangeRate } from "@/lib/fetchSettings";

import Headings from "@/components/UI/Headings";
import DisplaySearchResult from "@/components/DisplaySearchResult";

export const metadata: Metadata = {
  title: "Пошук товару - Eppo",
  description:
    "Сторінка відображення результатів пошуку товарів інтернет-магазину eppo.com.ua",
};

async function SearchPage({ params }: { params: { slug: string } }) {
  "use server";
  const exchangeRate = await fetchExchangeRate();
  const user = await currentUser();
  let additionalFunctionality = false;

  if (user) {
    additionalFunctionality = await checkIfAdmin(user.id);
  }

  if (!exchangeRate) {
    return (
      <>
        <Headings level={1}>Виникла помилка при завантаженні данних</Headings>
        <Headings level={2}>Спробуйте повторити запит</Headings>
      </>
    );
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
      exchangeRate={exchangeRate}
    />
  );
}

export default SearchPage;
