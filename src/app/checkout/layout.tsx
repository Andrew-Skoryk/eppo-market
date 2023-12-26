import type { Metadata } from "next";

import Headings from "../../components/UI/Headings";
import OrderProductsList from "@/components/OrderProductsList";

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

      <div className="grid grid-cols-7 gap-12">
        <div className="col-span-4">{children}</div>

        <div className="col-span-3">
          <OrderProductsList />
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
