import ButtonLink from "@/components/UI/ButtonLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Керування категоріями - Eppo",
  description:
    "Сторінка для керування та підкатегоріями категоріями інтрент-магазину eppo.com.ua",
};

function AdminCategory() {
  return (
    <div className="grid grid-cols-2 gap-16 px-20 pr-40">
      <ButtonLink>Додати нову категорію</ButtonLink>
      <ButtonLink>Змінити категорію</ButtonLink>
      <ButtonLink>Додати підкатегорію</ButtonLink>
      <ButtonLink>Змінити підкатегорію</ButtonLink>
    </div>
  );
}

export default AdminCategory;
