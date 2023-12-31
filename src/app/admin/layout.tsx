import Headings from "../../components/UI/Headings";
import AdminNavigation from "../../components/AdminNavigation";

type Props = {
  children: React.ReactNode;
};

function AdminPanel({ children }: Props) {
  return (
    <>
      <Headings level={1}>Admin Panel</Headings>

      <div className="grid grid-cols-5">
        <aside className="col-span-1 p-4 bg-white rounded">
          <Headings level={2} className="text-justify">
            Панель керування
          </Headings>

          <AdminNavigation />
        </aside>

        <div className="col-span-4">
          <section className="flex-grow p-4 text-center">{children}</section>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
