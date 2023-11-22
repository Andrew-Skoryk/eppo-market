"use client";

import { useRouter, usePathname } from "next/navigation";

import { categories } from "@/configs/categories";
import { cn } from "@/lib/utils";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Divider,
} from "@nextui-org/react";

function NavDropDownLinks() {
  const router = useRouter();
  const path = usePathname();

  const handleAction = (key: React.Key) => {
    router.push(`/category/${key}/earrings`);
  };

  const isActive = path.split("/")[1] === "category";

  const buttonBaseClasses =
    "hover:bg-yellow-200 transition-colors duration-300 active:bg-yellow-500 bg-amber-50 font-semibold px-4 h-min py-1.5 text-lime-800";

  return (
    <Dropdown
      showArrow
      classNames={{
        base: "p-0 bg-amber-50 text-lime-800",
        arrow: "bg-amber-300",
      }}
    >
      <DropdownTrigger className="hover:bg-yellow-200">
        <Button
          radius="md"
          size="lg"
          className={cn(buttonBaseClasses, {
            "bg-yellow-400": isActive,
          })}
        >
          Категорії
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="Категорії"
        onAction={handleAction}
        variant="light"
        color="primary"
        itemClasses={{
          base: "transition-color",
        }}
      >
        {categories.map(category => (
          <DropdownItem key={category.maping} className="text-lime-800">
            {category.name}
            <Divider className="mt-1" />
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default NavDropDownLinks;
