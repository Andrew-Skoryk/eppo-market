import Headings from "../../components/UI/Headings";
import Cart from "@/components/Cart";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Оформлення замовлення - Eppo",
  description: "Сторінка оформлення замовлення на eppo.com.ua",
};

type Props = {
  children: React.ReactNode;
};

function AdminPanel({ children }: Props) {
  return (
    <div className="flex flex-col w-full gap-10">
      <Headings level={1}>Оформлення замовлення</Headings>

      <div className="grid grid-cols-5 gap-12">
        <div className="col-span-3">{children}</div>

        <div className="col-span-2">
          <Cart minOrderAmount={800} />
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
