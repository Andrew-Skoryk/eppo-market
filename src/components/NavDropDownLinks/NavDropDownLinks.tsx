"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { useRouter, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

function NavDropDownLinks() {
  const router = useRouter();
  const path = usePathname();

  const handleAction = (key: React.Key) => {
    router.push(`/category/${key}`);
  };

  const isActive = path.slice(0, 9) === "/category";

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
        <DropdownItem key="gold">
          Xuping Золото
          <Divider className="mt-2" />
        </DropdownItem>
        <DropdownItem key="silver">
          Xuping Срібло
          <Divider className="mt-2" />
        </DropdownItem>
        <DropdownItem key="swarovski">
          Xuping Swarovski
          <Divider className="mt-2" />
        </DropdownItem>
        <DropdownItem key="ukraine-symbols">Символіка України</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default NavDropDownLinks;
