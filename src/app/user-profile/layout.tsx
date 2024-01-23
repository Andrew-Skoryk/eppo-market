import UserProfileBreadcrumbs from "@/components/UserProfileBreadcrumbs";

type Props = {
  children: React.ReactNode;
};

function AdminPanel({ children }: Props) {
  return (
    <section className="flex flex-col gap-6">
      <UserProfileBreadcrumbs />
      {children}
    </section>
  );
}

export default AdminPanel;
