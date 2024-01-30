import { Mail, Phone } from "lucide-react";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  footer?: boolean;
};

function ContactsInfoBlock({ children, href, footer }: Props) {
  const size = footer ? 14 : 19;
  const isMail = href.split(":")[0] === "mailto" ? true : false;

  return (
    <Link href={href} className="flex items-center gap-1 w-fit">
      {isMail ? <Mail size={size} /> : <Phone size={size} />}
      {children}
    </Link>
  );
}

export default ContactsInfoBlock;
