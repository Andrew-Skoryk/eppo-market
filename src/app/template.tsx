import SearchBar from "@/components/SearchBar";

function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center space-y-12 text">
      <SearchBar />
      {children}
    </div>
  );
}

export default Template;
