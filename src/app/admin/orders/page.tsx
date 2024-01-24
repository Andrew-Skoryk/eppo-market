import { countOrders, fetchOrdersSubset } from "@/lib/fetchOrders";

import AdminOrdersTable from "@/components/AdminOrdersTable";
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
  const orders = await fetchOrdersSubset(currentPage);

  return (
    <section className="flex flex-col items-center space-y-4">
      <AdminOrdersTable orders={orders} />
      <AdminOrdersPagination
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </section>
  );
}

export default AdminOrders;
