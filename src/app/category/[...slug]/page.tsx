import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { categories } from "@/configs/categories";
import { subcategories } from "@/configs/subcategories";

import GetProductsList from "../../../components/GetProductsList";

export const metadata: Metadata = {
  title: "Список товарів - Eppo",
  description: "Ця сторінка містить cпиcoк товарів на eppo.com.ua",
};

function CategoryPage({ params }: { params: { slug: string[] } }) {
  const [categoryMaping, subcategoryMaping, page] = params.slug;

  const category =
    categories.find(e => e.maping === categoryMaping)?.name || "";
  const subcategory =
    subcategories.find(e => e.maping === subcategoryMaping)?.name || "";

  if (!category || !subcategory) {
    notFound();
  }

  return (
    <section className="flex flex-col items-center space-y-4">
      <GetProductsList
        category={category}
        subcategory={subcategory}
        page={page}
      />
    </section>
  );
}

export default CategoryPage;
