import StandardInfoBlock from "../../components/UI/StandardInfoBlock";
import Headings from "../../components/UI/Headings";
import type { Metadata } from "next";
import { CreditCard, Wallet } from "lucide-react";

export const metadata: Metadata = {
  title: "Інформація про доставку та оплату",
  description:
    "Сторінка містить детальну інформацію про доставку та оплату на Eppo",
};

function DeliveryPage() {
  return (
    <section className="p-2 space-y-8 text-justify md:space-y-12">
      <Headings level={1}>Доставка та Оплата</Headings>
      <article>
        <StandardInfoBlock>
          <Headings level={2}>Нова пошта</Headings>
          <p>
            Час доставки в обласні центри України займає 1 – 2 дні, в інші міста
            - залежить від віддаленості до обласного центра. Всі товари
            перевіряють на відсутність браку. Акуратно пакують в спеціальну
            упаковку і картонні коробки, щоб уникнути пошкодження товару при
            перевезенні товару.​
          </p>
          <p>
            Номер товарно-транспортної накладної клієнт отримує в той же день
            після відправки замовлення після 17:00 години дня в SMS повідомленні
            на номер, вказаний при оформлені замовлення.
          </p>
          <p>
            При отриманні замовлення в відділенні«Нової Пошти» потрібен
            документ, що підтверджує Вашу особистість (паспорт, водійські права
            і т.д.).
          </p>
        </StandardInfoBlock>
      </article>

      <article className="space-y-6 md:space-y-8">
        <Headings level={2}>Оплата​</Headings>
        <StandardInfoBlock>
          <Headings level={3} className="flex items-center gap-2">
            <CreditCard />
            На картку ПриватБанку
          </Headings>
          <p>
            Клієнт сплачує повну вартість замовлення БЕЗ комісії за послуги
            банку (1% від суми замовлення). Реквізити, для оплати, клієнт
            отримує в SMS повідомленні після оформлення замовлення.
          </p>
        </StandardInfoBlock>
        <StandardInfoBlock>
          <Headings level={3} className="flex items-center gap-2">
            <Wallet />
            Накладений платіж
          </Headings>
          <p>
            У вас є можливість оплатити посилку, після того як Ви отримаєте її і
            переконаєтесь в тому, що ваше замовлення сформовано вірно, а весь
            товар цілий.
          </p>
        </StandardInfoBlock>
      </article>
    </section>
  );
}

export default DeliveryPage;
