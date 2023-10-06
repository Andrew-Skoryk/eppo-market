import Logo from "../Logo";
import Navigation from "../Navigation";
import UserPanel from "../UserPanel";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 py-4 bg-amber-50 h-fit">
      <div className="container flex items-center justify-between h-full gap-2 mx-auto max-w-7xl">
        <Logo />
        <Navigation />
        <UserPanel />
      </div>
    </header>
  );
};

export default Header;
