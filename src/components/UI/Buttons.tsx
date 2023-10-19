import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";

type Props = {
  children: React.ReactNode;
  className?: string;
  isDisabled?: boolean;
};

function Buttons({ children, className, isDisabled }: Props) {
  return (
    <Button
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

export default Buttons;
