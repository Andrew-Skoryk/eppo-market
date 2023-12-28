import { Pagination } from "@nextui-org/react";
import OrdersTable from "@/components/OrdersTable";
import { fetchOrders } from "@/lib/fetchOrders";

async function AdminOrders() {
  const orders = await fetchOrders();

  return (
    <section className="flex flex-col items-center space-y-4">
      <OrdersTable orders={orders} />

      <Pagination
        total={10}
        initialPage={1}
        showControls
        variant="faded"
        size="lg"
        showShadow
      />
    </section>
  );
}

export default AdminOrders;
