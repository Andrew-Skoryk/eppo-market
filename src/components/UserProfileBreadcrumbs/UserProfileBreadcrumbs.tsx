"use client";

import { usePathname, useRouter } from "next/navigation";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

function UserProfileBreadcrumbs() {
  const path = usePathname();
  const router = useRouter();

  return (
    <Breadcrumbs
      size="lg"
      onAction={key => router.replace(key.toString())}
      classNames={{
        list: "gap-4",
      }}
      itemClasses={{
        item: [
          "px-3 py-1 border-small border-yellow-500 rounded-small text-lime-800 hover:border-yellow-600 hover:bg-yellow-200 text-lg",
          "data-[current=true]:border-bg-yellow-300 data-[current=true]:bg-yellow-300 transition-colors",
          "data-[disabled=true]:border-yellow-500 data-[disabled=true]:bg-yellow-100",
        ],
        separator: "hidden",
      }}
    >
      <BreadcrumbItem
        key="/user-profile"
        isCurrent={path.endsWith("/user-profile")}
      >
        Налаштування
      </BreadcrumbItem>
      <BreadcrumbItem
        key="/user-profile/orders"
        isCurrent={path.endsWith("/orders")}
      >
        Історія замовлень
      </BreadcrumbItem>
    </Breadcrumbs>
  );
}

export default UserProfileBreadcrumbs;
