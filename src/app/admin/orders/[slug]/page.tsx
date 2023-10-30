import { ordersTest } from "@/components/OrdersTable/ordersTest";
import OrderCard from "@/components/OrderCard";
import Buttons from "@/components/UI/Buttons";

function OrderAdminDetailsPage({ params }: { params: { slug: string } }) {
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
    <section className="flex flex-col space-y-4">
      <Buttons className="self-end py-6 text-lg font-semibold">
        Роздрукувати Замовлення
      </Buttons>

      <OrderCard order={askedOrder} />
    </section>
  );
}

export default OrderAdminDetailsPage;
