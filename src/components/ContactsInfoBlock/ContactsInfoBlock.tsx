import { cn } from "@/lib/utils";
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
    <Link
      href={href}
      className={cn(
        "flex items-center gap-1 duration-300 w-fit transition-colors",
        {
          "hover:text-gray-500": footer,
          "hover:text-amber-700": !footer,
        },
      )}
    >
      {isMail ? <Mail size={size} /> : <Phone size={size} />}
      {children}
    </Link>
  );
}

export default ContactsInfoBlock;
