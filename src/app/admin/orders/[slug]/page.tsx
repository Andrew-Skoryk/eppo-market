"use client";

import { useParams } from "next/navigation";

import { ordersTest } from "@/components/OrdersTable/ordersTest";

function OrderAdminDetailsPage() {
  const { slug } = useParams();
  const askedOrder = ordersTest.find(order => order.id === +slug);

  if (!askedOrder) {
    return (
      <p>
        Ой! Щось пішло не так... Не можливо відкрити замовлення.
        <br /> Щось Андрій &quot;намудрив&quot;
      </p>
    );
  }

  return (
    <section className="text-center p-4">
      <p>Тут буде детальна інформація по замовленю {slug}</p>
      <p>Cума замовлення: {askedOrder?.totalSum}</p>
      <p></p>
    </section>
  );
}

export default OrderAdminDetailsPage;
