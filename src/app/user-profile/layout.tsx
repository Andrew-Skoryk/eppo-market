import UserProfileBreadcrumbs from "@/components/UserProfileBreadcrumbs";

type Props = {
  children: React.ReactNode;
};

function AdminPanel({ children }: Props) {
  return (
    <section className="flex flex-col items-center w-full gap-8">
      <UserProfileBreadcrumbs />
      {children}
    </section>
  );
}

export default AdminPanel;
