import ButtonLink from "@/components/UI/ButtonLink";
import { Pagination } from "@nextui-org/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Налаштування товарів - Eppo",
  description: "Сторінка для управління товарами інтернет-магазину eppo.com.ua",
};

function AdminProducts() {
  return (
    <section className="flex flex-col items-center space-y-4">
      <ButtonLink
        href="./products/create"
        className="self-end py-6 text-lg font-semibold"
      >
        Додати новий товар
      </ButtonLink>

      

      <Pagination
        total={10}
        initialPage={1}
        showControls
        variant="faded"
        size="lg"
        showShadow
      />
    </section>
  );
}

export default AdminProducts;
