import { Pagination } from "@nextui-org/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Налаштування товарів - Eppo",
  description: "Сторінка для управління товарами інтрент-магазину eppo.com.ua",
};

function AdminProducts() {
  return (
    <section className="flex flex-col items-center space-y-4">
      
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
