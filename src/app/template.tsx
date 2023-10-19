import SearchBar from "@/components/SearchBar";

function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-12">
      <SearchBar />
      {children}
    </div>
  );
}

export default Template;
