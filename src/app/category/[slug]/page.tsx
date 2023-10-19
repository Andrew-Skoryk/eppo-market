import GetProductsList from "../../../components/GetProductsList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Список товарів - Eppo",
  description: "Ця сторінка містить cписок товарів на eppo.com.ua",
};

function CategoryPage() {
  return (
    <section className="flex flex-col p-4 items-center space-y-4">
      Тут буде результат вашого пошуку по <GetProductsList />
    </section>
  );
}

export default CategoryPage;
