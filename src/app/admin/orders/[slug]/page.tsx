import { ordersTest } from "@/components/OrdersTable/ordersTest";
import OrderCard from "@/components/OrderCard";
import Headings from "@/components/UI/Headings";

function OrderAdminDetailsPage({ params }: { params: { slug: string }}) {
  const askedOrder = ordersTest.find(order => order.id === +params.slug);

  if (!askedOrder) {
    return (
      <p className="text-center">
        Ой! Щось пішло не так... Неможливо відкрити замовлення!
        <br /> Щось Андрій &quot;намудрив&quot;
        <strong>{params.slug}</strong>
      </p>
    );
  }

  return (
    <section className="flex flex-col items-center space-y-3">
      <Headings level={3}>
        Тут буде детальна інформація по замовленню №:{" "}
        <span className="text-3xl text-amber-600">{params.slug}</span>
      </Headings>
      <OrderCard order={askedOrder} />
    </section>
  );
}

export default OrderAdminDetailsPage;
