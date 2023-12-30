"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { path: "/admin/products", label: "Товари" },
  { path: "/admin/orders", label: "Замовлення" },
  { path: "/admin/category", label: "Керування категоріями" },
  { path: "/admin/settings", label: "Налаштування" },
  { path: "/admin/announcement", label: "Анонси/Новини" },
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
              className={cn("rounded-md hover:text-amber-600", {
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
