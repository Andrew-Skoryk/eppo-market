import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Загальні налаштування - Eppo",
  description:
    "Сторінка для управління базовими налаштуваннями інтрент-магазину eppo.com.ua",
};

function AdminSettings() {
  return <div>Тут будуть загальні налаштування магазину</div>;
}

export default AdminSettings;
