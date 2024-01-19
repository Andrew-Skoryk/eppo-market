import type { Metadata } from "next";

import { fetchMinOrderAmount } from "@/lib/fetchSettings";

import Headings from "../../components/UI/Headings";
import Cart from "../../components/Cart";

export const revalidate = 3600 * 24;

export const metadata: Metadata = {
  title: "Кошик - Eppo",
  description: "Сторінка для керуванням кошиком на eppo.com.ua",
};

async function CartPage() {
  const minOrderAmount = await fetchMinOrderAmount();

  return (
    <section className="flex flex-col items-center gap-4">
      <Headings level={1}>Кошик</Headings>

      <Cart minOrderAmount={minOrderAmount} />
    </section>
  );
}

export default CartPage;
