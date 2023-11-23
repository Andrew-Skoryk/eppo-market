import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { categories } from "@/configs/categories";
import { subcategories } from "@/configs/subcategories";
import { countItems } from "@/lib/countItems";

import GetProductsList from "../../../components/GetProductsList";

export const metadata: Metadata = {
  title: "Список товарів - Eppo",
  description: "Ця сторінка містить cпиcoк товарів на eppo.com.ua",
};

async function CategoryPage({ params }: { params: { slug: string[] } }) {
  const [categoryMaping, subcategoryMaping, pageMaping] = params.slug;

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
      />
    </section>
  );
}

export default CategoryPage;
