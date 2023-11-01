import type { Metadata } from "next";

import CreateProductForm from "@/components/CreateProductForm";
import Headings from "@/components/UI/Headings";

export const metadata: Metadata = {
  title: "Створення нового товару - Eppo",
  description:
    "Сторінка для створення та додавання товару для інтрент-магазину eppo.com.ua",
};

function CreateNewProduct() {
  return (
    <div>
      <Headings level={2}>Форма створення товару</Headings>

      <CreateProductForm />
    </div>
  );
}

export default CreateNewProduct;
