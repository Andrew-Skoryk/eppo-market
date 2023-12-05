import type { Metadata } from "next";

import { fetchSettings } from "@/lib/fetchSettings";

import Headings from "../../../components/UI/Headings";
import AdminSettingsEditor from "../../../components/AdminSettingsEditor";
import { changeMinOrder, changeExchangeRate } from "./actions";

export const metadata: Metadata = {
  title: "Загальні налаштування - Eppo",
  description:
    "Сторінка для управління базовими налаштуваннями інтернет-магазину eppo.com.ua",
};

async function AdminSettings() {
  const minOrderAmount = await fetchSettings("minOrderAmount");
  const exchangeRate = await fetchSettings("exchangeRate");

  return (
    <div className="flex flex-col gap-16">
      <Headings level={2}>Загальні налаштування магазину</Headings>

      <AdminSettingsEditor
        label={{
          name: "price",
          value: "Мінімальна сума замовлення",
        }}
        action={changeMinOrder}
        defaultValue={minOrderAmount}
      />

      <AdminSettingsEditor
        label={{
          name: "rate",
          value: "Курс магазину",
        }}
        action={changeExchangeRate}
        defaultValue={exchangeRate}
      />
    </div>
  );
}

export default AdminSettings;
