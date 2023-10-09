type Props = {
  children: React.ReactNode;
};

function StandardInfoBlock({ children }: Props) {
  return <div className="lg:space-y-2 space-y-1">{children}</div>;
}

export default StandardInfoBlock;
