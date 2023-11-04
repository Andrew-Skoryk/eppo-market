import { cn } from "@/lib/utils";
import { Button, Link } from "@nextui-org/react";

type Props = {
  children: React.ReactNode;
  className?: string;
  isDisabled?: boolean;
  href?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

function ButtonLink({ children, className, isDisabled, href, type }: Props) {
  return (
    <Button
      type={type || "button"}
      href={href}
      as={Link}
      isDisabled={isDisabled}
      className={cn(
        "duration-300 bg-amber-400 border text-lime-800 border-amber-500 hover:bg-amber-500",
        className,
      )}
    >
      {children}
    </Button>
  );
}

export default ButtonLink;
