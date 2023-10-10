import { Mail, Phone } from "lucide-react";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

function ContactsInfoBlock({ children, href }: Props) {
  const isMail = href.split(":")[0] === "mailto" ? true : false;
  const size = 19;

  return (
    <Link href={href} className="flex gap-1 items-center w-fit">
      {isMail ? <Mail size={size} /> : <Phone size={size} />}
      {children}
    </Link>
  );
}

export default ContactsInfoBlock;
