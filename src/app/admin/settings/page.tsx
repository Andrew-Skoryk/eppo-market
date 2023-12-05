import type { Metadata } from "next";

import Headings from "../../../components/UI/Headings";
import MinOrderAmountEditor from "../../../components/MinOrderAmountEditor";
import ExchangeRateEditor from "../../../components/ExchangeRateEditor";

export const metadata: Metadata = {
  title: "Загальні налаштування - Eppo",
  description:
    "Сторінка для управління базовими налаштуваннями інтернет-магазину eppo.com.ua",
};

function AdminSettings() {
  return (
    <div className="flex flex-col gap-16">
      <Headings level={2}>Загальні налаштування магазину</Headings>

      <MinOrderAmountEditor />
      <ExchangeRateEditor />
    </div>
  );
}

export default AdminSettings;
