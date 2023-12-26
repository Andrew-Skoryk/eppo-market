import OrderCard from "@/components/OrderCard";
import ButtonLink from "@/components/UI/ButtonLink";
import { findOrder } from "@/lib/findOrder";

async function OrderAdminDetailsPage({ params }: { params: { slug: string } }) {
  const order = await findOrder(+params.slug);

  if (!order) {
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
      <ButtonLink className="self-end py-6 text-lg font-semibold">
        Роздрукувати Замовлення
      </ButtonLink>

      <OrderCard order={order} />
    </section>
  );
}

export default OrderAdminDetailsPage;
