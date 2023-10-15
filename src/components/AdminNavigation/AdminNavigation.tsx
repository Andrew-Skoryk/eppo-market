"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { path: "/admin/products", label: "Товари" },
  { path: "/admin/orders", label: "Замовлення" },
  { path: "/admin/settings", label: "Налаштування" },
];

const AdminNavigation = () => {
  const linkPath = usePathname();

  return (
    <nav>
      <ul className="space-y-2">
        {navigationItems.map(({ path, label }) => {
          const isActive = linkPath === path;

          return (
            <li
              key={path}
              className={cn("p-1.5 rounded-md hover:text-amber-600", {
                "font-bold bg-slate-200": isActive,
              })}
            >
              <Link href={path}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default AdminNavigation;
