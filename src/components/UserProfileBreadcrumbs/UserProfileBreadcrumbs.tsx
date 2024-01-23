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
        list: "gap-2",
      }}
      itemClasses={{
        item: [
          "px-2 py-0.5 border-small border-default-400 rounded-small",
          "data-[current=true]:border-foreground data-[current=true]:bg-foreground data-[current=true]:text-background transition-colors",
          "data-[disabled=true]:border-default-400 data-[disabled=true]:bg-default-100",
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
      <BreadcrumbItem key="/user-profile/orders" isCurrent={path.endsWith("/orders")}>
        Замовлення
      </BreadcrumbItem>
    </Breadcrumbs>
  );
}

export default UserProfileBreadcrumbs;
