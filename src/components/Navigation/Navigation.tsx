import NavLink from "../NavLink";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <NavLink href="/">Головна</NavLink>
        </li>
        <li>
          <NavLink href="/category">Товари</NavLink>
        </li>
        <li>
          <NavLink href={"/about"}>Про нас</NavLink>
        </li>
        <li>
          <NavLink href={"/delivery"}>Доставка/Оплата</NavLink>
        </li>
        <li>
          <NavLink href="/contacts">Контакти</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
