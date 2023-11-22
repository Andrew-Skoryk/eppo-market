"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { categories } from "../../configs/categories";
import { subcategories } from "../../configs/subcategories";

import { Accordion, AccordionItem } from "@nextui-org/react";
import NavLink from "../NavLink";

function SideNavigation() {
  const path = usePathname();
  const [activePath, setActivePath] = useState(path.split("/")[2]);

  useEffect(() => {
    setActivePath(path.split("/")[2]);
  }, [path]);

  return (
    <Accordion
      selectionMode="multiple"
      key={activePath}
      defaultExpandedKeys={[activePath]}
      isCompact
      variant="splitted"
    >
      {categories.map(category => (
        <AccordionItem
          key={category.maping}
          aria-label={category.name}
          title={category.name}
          classNames={{
            base: "text-lime-800 font-medium",
            title:
              "text-lime-800 font-semibold hover:text-amber-600 transition-colors",
          }}
        >
          <div className="flex flex-col">
            {subcategories.map(subcategory => (
              <NavLink
                key={subcategory.maping}
                href={`/category/${category.maping}/${subcategory.maping}`}
              >
                {subcategory.name}
              </NavLink>
            ))}
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default SideNavigation;
