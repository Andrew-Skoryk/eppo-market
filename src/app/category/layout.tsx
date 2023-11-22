import SideNavigation from "@/components/SideNavigation";

function CategoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid w-full grid-cols-6 gap-4">
      <aside className="col-span-1">
        <SideNavigation />
      </aside>

      <div className="col-span-5">{children}</div>
    </div>
  );
}

export default CategoryLayout;
