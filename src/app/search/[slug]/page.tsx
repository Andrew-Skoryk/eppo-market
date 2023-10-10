import SearchPageComp from "../../../components/SearchPageComp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Пошук товару на Eppo",
  description: "Результат пошуку товарів за кодуванням на eppo.com.ua",
};

function SearchPage() {
  return (
    <section className="text-center p-4">
      Тут буде результат вашого пошуку по <SearchPageComp />
    </section>
  );
}

export default SearchPage;
