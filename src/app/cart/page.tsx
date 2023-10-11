import Cart from "../../components/Cart";
import Headings from "../../components/UI/Headings";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Кошик - Eppo",
  description: "Сторінка кошику на eppo.com.ua",
};

function CartPage() {
  return (
    <section className="flex flex-col gap-4 items-center">
      <Headings level={1}>Кошик</Headings>

      <Cart />


    </section>
  );
}

export default CartPage;
