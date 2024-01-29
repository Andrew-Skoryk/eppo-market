import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Logo from "../Logo";
import Navigation from "../Navigation";
import UserPanel from "../UserPanel";

const Header = () => {
  return (
    <Navbar className="z-50 pt-2 bg-amber-50 text-lime-800">
      <NavbarContent className="container flex items-center justify-between gap-2 mx-auto max-w-7xl">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>

        <NavbarItem>
          <Navigation />
        </NavbarItem>

        <NavbarItem>
          <UserPanel />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
