import NavLink from "../NavLink";
import NavDropDownLinks from "../NavDropDownLinks";

function Navigation() {
  return (
    <nav>
      <ul className="flex space-x-4 items-center">
        <li>
          <NavDropDownLinks />
        </li>
        <li>
          <NavLink href="/about">Про нас</NavLink>
        </li>
        <li>
          <NavLink href="/delivery">Доставка/Оплата</NavLink>
        </li>
        <li>
          <NavLink href="/contacts">Контакти</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
