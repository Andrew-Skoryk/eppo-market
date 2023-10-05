import Logo from "../Logo";
import Navigation from "../Navigation";
import UserPanel from "../UserPanel";

const Header = () => {
  return (
    <header className=" bg-amber-50 py-4">
      <div className="container flex justify-between items-center  mx-auto">
        <Logo />
        <Navigation />
        <UserPanel />
      </div>
    </header>
  );
};

export default Header;
