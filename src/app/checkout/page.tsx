import type { Metadata } from "next";

import Headings from "@/components/UI/Headings";
import ButtonLink from "@/components/UI/ButtonLink";
import PlacingOrder from "@/components/PlacingOrder";
import Cart from "@/components/Cart";

export const metadata: Metadata = {
  title: "Оформлення замовлення - Eppo",
  description: "Сторінка оформлення замовлення на eppo.com.ua",
};

function Checkout() {
  return (
    <div className="flex flex-col w-full gap-10">
      <Headings level={1}>Оформлення замовлення</Headings>

      <div className="grid grid-cols-5 gap-12">
        <div className="col-span-3">
          <PlacingOrder />
        </div>

        <div className="col-span-2">
          <Cart minOrderAmount={800} />
        </div>
      </div>

      <ButtonLink>Замовлення підтверджую</ButtonLink>
    </div>
  );
}

export default Checkout;
