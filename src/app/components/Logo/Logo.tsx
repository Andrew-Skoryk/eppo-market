import Image from "next/image";
import MainLogo from "../../../../public/logos/logo3.png";

const Logo = () => {
  return (
    <a href="/" className="flex items-center">
      <Image src={MainLogo} alt="Eppo market Logo" width={60} height={60} />
    </a>
  );
};

export default Logo;
