import Image from "next/image";
import MainLogo from "../../../public/logos/logo3.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src={MainLogo} alt="Eppo market Logo" width={60} height={60} />
      <p className="hidden text-sm font-medium text-zinc-700 md:block">Eppo</p>
    </Link>
  );
};

export default Logo;
