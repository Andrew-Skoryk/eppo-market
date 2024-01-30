import Link from "next/link";
import ContactsInfoBlock from "../ContactsInfoBlock";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="py-2 bg-orange-400 text-slate-100">
      <div className="container relative flex items-center justify-between mx-auto max-w-7xl">
        <Logo />

        <p className="absolute self-end text-xs -translate-x-1/2 w-max inset-x-1/2 text-slate-200">
          &copy; {new Date().getFullYear()} All rights reserved
        </p>

        <nav className="w-full">
          <ul className="flex justify-around transition-colors duration-300">
            <li className="mt-3 hover:text-gray-300">
              <Link href="/delivery">Доставка та Оплата</Link>
            </li>

            <li className="mt-3 hover:text-gray-300">
              <Link href="/contacts">Контакти</Link>
            </li>

            <li className="flex flex-col text-xs gap-0.5">
              <ContactsInfoBlock href="tel:+380682128618" footer>
                Kyivstar: +38(068) 212-86-18
              </ContactsInfoBlock>

              <ContactsInfoBlock href="tel:+380682516511" footer>
                Kyivstar: +38(068) 251-65-11
              </ContactsInfoBlock>

              <ContactsInfoBlock href="tel:+380507237597" footer>
                Vodafone: +38(050) 723-75-97
              </ContactsInfoBlock>

              <ContactsInfoBlock href="mailto:eppo.sales@gmail.com" footer>
                e-mail: eppo.sales@gmail.com
              </ContactsInfoBlock>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
