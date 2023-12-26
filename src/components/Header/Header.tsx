import Logo from "../Logo";
import Navigation from "../Navigation";
import UserPanel from "../UserPanel";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-2 bg-amber-50 h-fit text-lime-800">
      <div className="container flex items-center justify-between h-full gap-2 mx-auto max-w-7xl">
        <Logo />
        <Navigation />
        <UserPanel />
      </div>
    </header>
  );
};

export default Header;
