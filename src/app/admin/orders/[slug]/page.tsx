import { findOrder } from "@/lib/findOrder";

import AdminOrderCard from "@/components/AdminOrderCard";
import PrintOrderButton from "@/components/PrintOrderButton";

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
      <PrintOrderButton order={order} />
      <AdminOrderCard order={order} />
    </section>
  );
}

export default OrderAdminDetailsPage;
