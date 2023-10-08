import Image from "next/image";
import MainLogo from "../../../public/logos/logo3.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2" title="Eppo">
      <Image
        src={MainLogo}
        alt="Eppo market Logo"
        className="w-16 h-16 sm:h-12 sm:w-12"
      />
      <p className="hidden text-sm font-medium md:block text-stone-700">Eppo</p>
    </Link>
  );
};

export default Logo;
