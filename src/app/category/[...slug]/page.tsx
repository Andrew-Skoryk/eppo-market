import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { categories } from "@/configs/categories";
import { subcategories } from "@/configs/subcategories";
import { countItems } from "@/lib/countItems";
import { fetchExchangeRate } from "@/lib/fetchSettings";

import GetProductsList from "../../../components/GetProductsList";
import Headings from "../../../components/UI/Headings";

export const metadata: Metadata = {
  title: "Список товарів - Eppo",
  description: "Ця сторінка містить cпиcoк товарів на eppo.com.ua",
};

async function CategoryPage({ params }: { params: { slug: string[] } }) {
  const [categoryMaping, subcategoryMaping, pageMaping] = params.slug;
  const exchangeRate = await fetchExchangeRate();

  if (!exchangeRate) {
    return (
      <>
        <Headings level={1}>Виникла помилка при завантаженні данних</Headings>
        <Headings level={2}>Спробуйте повторити запит</Headings>
      </>
    );
  }

  const category =
    categories.find(e => e.maping === categoryMaping)?.name || "";
  const subcategory =
    subcategories.find(e => e.maping === subcategoryMaping)?.name || "";
  const page = parseInt(pageMaping, 10) || 1;

  if (!category || !subcategory) {
    notFound();
  }

  const itemCount = await countItems(category, subcategory);
  const totalPages = Math.ceil(itemCount / 1);

  return (
    <section className="flex flex-col items-center space-y-4">
      <GetProductsList
        category={category}
        subcategory={subcategory}
        page={page}
        totalPages={totalPages}
        categoryMaping={categoryMaping}
        subcategoryMaping={subcategoryMaping}
        exchangeRate={exchangeRate}
      />
    </section>
  );
}

export default CategoryPage;
