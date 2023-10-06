import NavLink from "../NavLink";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex space-x-4 text-lime-700">
        <li>
          <NavLink href="/">Головна</NavLink>
        </li>
        <li>
          <NavLink href="/products">Товари</NavLink>
        </li>
        <li>
          <NavLink href="/contact">Контакти</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
