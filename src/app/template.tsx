import SearchBar from "@/components/SearchBar";

function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SearchBar />
      {children}
    </>
  );
}

export default Template;
