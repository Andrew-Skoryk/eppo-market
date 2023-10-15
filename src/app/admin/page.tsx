import Headings from "../../components/UI/Headings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Адмін панель - Eppo",
  description:
    "Сторінка для управління базовим функціоналом інтрент-магазину eppo.com.ua",
};

function AdminPage() {
  return (
    <Headings level={3}>
      Доброго дня! Будь ласка, оберіть в Панелі керувань пункт який Вас цікавить
    </Headings>
  );
}

export default AdminPage;
