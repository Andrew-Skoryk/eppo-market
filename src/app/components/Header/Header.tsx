import Logo from "../Logo";
import Navigation from "../Navigation";
import UserPanel from "../UserPanel";

const Header = () => {
  return (
    <header className="p-4 bg-amber-50 flex justify-between items-center">
      <Logo />
      <Navigation />
      <UserPanel />
    </header>
  );
};

export default Header;
