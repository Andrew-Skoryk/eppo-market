"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type PropsWithChildren } from "react";
import Link, { type LinkProps } from "next/link";

import { cn } from "../../lib/utils";

type Props = LinkProps & {
  href: string;
};

const NavLink = ({ href, children }: PropsWithChildren<Props>) => {
  const path = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const linkPathname = new URL(href, location.href).pathname;
    const activePathname = new URL(path, location.href).pathname;

    setIsActive(activePathname.startsWith(linkPathname));
  }, [href, path]);

  const whatUserPanel = href === "/sign-in" ? "Профіль" : "Корзина";
  const normalizedTitle =
    typeof children === "string" ? children.toString() : whatUserPanel;

  return (
    <Link
      href={href}
      title={normalizedTitle}
      className={cn(
        "rounded-xl py-2 px-4 font-semibold hover:bg-yellow-200 transition-colors duration-300 active:bg-yellow-500",
        {
          "bg-yellow-400": isActive,
        },
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
