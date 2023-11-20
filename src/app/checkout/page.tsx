import type { Metadata } from "next";

import Headings from "@/components/UI/Headings";
import ButtonLink from "@/components/UI/ButtonLink";

export const metadata: Metadata = {
  title: "Оформелення замовлення - Eppo",
  description: "Сторінка оформлення замовлення на eppo.com.ua",
};

function Checkout() {
  return (
    <div>
      <Headings level={1}>Оформлення замовлення</Headings>
      <ButtonLink>Оформити</ButtonLink>
    </div>
  );
}

export default Checkout;
