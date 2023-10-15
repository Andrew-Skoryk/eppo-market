import SearchBar from "@/components/SearchBar";

function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center w-full space-y-12">
      <SearchBar />
      {children}
    </div>
  );
}

export default Template;
