import { cn } from "../../lib/utils";

type headingLevels = 1 | 2 | 3 | 4 | 5 | 6;

type Props = {
  level: headingLevels;
  children: React.ReactNode;
  className?: string;
};

const headingStyles: Record<headingLevels, string> = {
  1: "text-4xl font-bold mb-6 text-center",
  2: "text-2xl font-semibold mb-4 text-center",
  3: "text-xl font-semibold mb-3",
  4: "text-lg font-medium mb-2",
  5: "text-lg font-medium mb-2",
  6: "text-base font-medium mb-2",
};

function Headings({ level, children, className }: Props) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={cn(headingStyles[level], className)}>
      {children}
    </Tag>
  );
}

export default Headings;
