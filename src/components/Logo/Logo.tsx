import Image from "next/image";
import MainLogo from "../../../public/logos/logo3.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2" title="Eppo">
      <Image
        src={MainLogo}
        alt="Eppo market Logo"
        className="lg:w-16 lg:h-16 h-14 w-14"
      />
      <p className="hidden text-sm font-medium md:block text-stone-700">Eppo</p>
    </Link>
  );
};

export default Logo;
