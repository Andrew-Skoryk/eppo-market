import type { Metadata } from "next";
import { currentUser } from "@clerk/nextjs";
import { fetchUserOrders } from "@/lib/fetchUserOrders";

import Headings from "@/components/UI/Headings";
import UserOrderTable from "@/components/UserOrderTable";

export const metadata: Metadata = {
  title: "Історія замовлень",
  description: "Ця сторінка містить історія замовлень користувача",
};

async function UserOrdersPage() {
  const user = await currentUser();

  if (!user) {
    return <Headings level={1}>Будь ласка, увійдіть в свій профіль</Headings>;
  }

  const orders = await fetchUserOrders(user.id);

  return <UserOrderTable orders={orders} />
}

export default UserOrdersPage;
