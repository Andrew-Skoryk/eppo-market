import Headings from "../../../components/UI/Headings";
// import MinOrderAmountEditor from "../../../components/MinOrderAmountEditor";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Загальні налаштування - Eppo",
  description:
    "Сторінка для управління базовими налаштуваннями інтрент-магазину eppo.com.ua",
};

function AdminSettings() {
  return (
    <div className="">
      <Headings level={2}>Загальні налаштування магазину</Headings>
      {/* <MinOrderAmountEditor /> */}
    </div>
  );
}

export default AdminSettings;
