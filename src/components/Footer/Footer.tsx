import Logo from "../Logo";
import NavLink from "../NavLink";

const Footer = () => {
  return (
    <footer className="py-2 text-slate-100 bg-orange-400">
      <div className="container relative flex items-center justify-between mx-auto max-w-7xl">
        <Logo />
        <p className="absolute self-end text-xs -translate-x-1/2 w-max inset-x-1/2 text-slate-200">
          &copy; {new Date().getFullYear()} All rights reserved
        </p>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink href="/privacy-policy">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink href="/terms-and-conditions">Terms & Conditions</NavLink>
            </li>
            <li>
              <NavLink href="/contact-us">Contact Us</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
