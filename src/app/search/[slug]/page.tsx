import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Пошук товару - Eppo",
  description:
    "Сторінка відображення результатів пошуку товарів інтернет-магазину eppo.com.ua",
};

function SearchPage({ params }: { params: { slug: string } }) {
  return (
    <section className="text-center p-4">
      Тут буде результат вашого пошуку по {params.slug}
    </section>
  );
}

export default SearchPage;
