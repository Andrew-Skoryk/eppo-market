import { Pagination } from "@nextui-org/react";
import OrdersTable from "@/components/OrdersTable/OrdersTable";

function AdminOrders() {
  return (
    <section className="flex flex-col items-center space-y-4">
      <OrdersTable />

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
