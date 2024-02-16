"use client";

import { useState } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Logo from "../Logo";
import Navigation from "../Navigation";
import UserPanel from "../UserPanel";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      className="z-50 py-2 bg-amber-50 text-lime-800"
      maxWidth="full"
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
    >
      <div className="container max-w-7xl grid grid-flow-col px-0 md:px-8">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />

        <NavbarBrand>
          <Logo />
        </NavbarBrand>

        <NavbarContent justify="center" className="hidden md:flex">
          <NavbarItem>
            <Navigation />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <UserPanel />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          <Navigation />
        </NavbarMenu>
      </div>
    </Navbar>
  );
};

export default Header;
