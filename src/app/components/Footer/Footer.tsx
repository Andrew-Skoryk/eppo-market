import Logo from "../Logo";
import NavLink from "../NavLink";

const Footer = () => {
  return (
    <footer className="bg-orange-400 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
          <Logo />
          <p className="text-sm self-end">&copy; {new Date().getFullYear()} All rights reserved.</p>
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
