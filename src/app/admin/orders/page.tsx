import { countOrders, fetchOrders } from "@/lib/fetchOrders";

import OrdersTable from "@/components/OrdersTable";
import AdminOrdersPagination from "@/components/AdminOrdersPagination";

async function AdminOrders({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await countOrders();
  const orders = await fetchOrders(currentPage);

  return (
    <section className="flex flex-col items-center space-y-4">
      <OrdersTable orders={orders} />
      <AdminOrdersPagination
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </section>
  );
}

export default AdminOrders;
