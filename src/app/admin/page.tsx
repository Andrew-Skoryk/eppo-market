import Headings from "../../components/UI/Headings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Адмін панель - Eppo",
  description:
    "Сторінка для управління базовим функціоналом інтрент-магазину eppo.com.ua",
};

function AdminPage() {
  return (
    <div className="">
      <Headings level={3}>
        Доброго дня! Будь ласка, оберіть в Панелі керування пункт який Вас
        цікавить
      </Headings>
    </div>
  );
}

export default AdminPage;
