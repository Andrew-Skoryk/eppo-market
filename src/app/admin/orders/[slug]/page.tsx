"use client";

import { useParams } from "next/navigation";

import { ordersTest } from "@/components/OrdersTable/ordersTest";
import OrderCard from "@/components/OrderCard";
import Headings from "@/components/UI/Headings";

function OrderAdminDetailsPage() {
  const { slug } = useParams();
  const askedOrder = ordersTest.find(order => order.id === +slug);

  if (!askedOrder) {
    return (
      <p className="text-center">
        Ой! Щось пішло не так... Не можливо відкрити замовлення!
        <br /> Щось Андрій &quot;намудрив&quot;
      </p>
    );
  }

  return (
    <section className="flex flex-col items-center space-y-3">
      <Headings level={3}>
        Тут буде детальна інформація по замовленю №:{" "}
        <span className="text-3xl text-amber-600">{slug}</span>
      </Headings>
      <OrderCard order={askedOrder} />
    </section>
  );
}

export default OrderAdminDetailsPage;
