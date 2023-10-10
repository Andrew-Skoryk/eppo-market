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
      <Headings level={2}>Ваш кошик порожній</Headings>
      <p>Але це ніколи не пізно виправити :)</p>

      <Cart />

      <button className="p-2 border rounded-md bg-amber-400 text-lime-800 border-amber-500 hover:bg-amber-500 active:bg-amber-600 transition-colors duration-300">
        Оформити замовлення
      </button>
    </section>
  );
}

export default CartPage;
