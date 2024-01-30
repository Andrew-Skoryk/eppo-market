import StandardInfoBlock from "../../components/UI/StandardInfoBlock";
import Headings from "../../components/UI/Headings";
import type { Metadata } from "next";
import { Clock2, Clock4, Hourglass } from "lucide-react";
import ContactsInfoBlock from "../../components/ContactsInfoBlock";

export const metadata: Metadata = {
  title: "Контакти - Eppo",
  description:
    "Знайдіть нас у м. Івано-Франківськ або зв’яжіться з нами за допомогою телефону чи електронної пошти для отримання додаткової інформації про нашу продукцію та послуги.",
};

function ContactsPage() {
  return (
    <section className="flex flex-col gap-8 p-2">
      <Headings level={1}>Контакти</Headings>
      <article>
        <address className="not-italic">
          <Headings level={2}>Адреса магазину</Headings>
          <p>
            Інтернет-магазин{" "}
            <span className="font-semibold text-amber-700 lg:text-lg">
              Eppo
            </span>
          </p>

          <p>м. Івано-Франківськ</p>

          <StandardInfoBlock>
            <Headings level={2}>Наші контакти</Headings>

            <ContactsInfoBlock href="tel:+380682128618">
              Kyivstar: <span>+38(068) 212-86-18</span>
            </ContactsInfoBlock>

            <ContactsInfoBlock href="tel:+380682516511 ">
              Kyivstar: +38(068) 251-65-11
            </ContactsInfoBlock>

            <ContactsInfoBlock href="tel:+380507237597">
              Vodafone: +38(050) 723-75-97
            </ContactsInfoBlock>

            <ContactsInfoBlock href="mailto:eppo.sales@gmail.com">
              e-mail: eppo.sales@gmail.com
            </ContactsInfoBlock>
          </StandardInfoBlock>

          <StandardInfoBlock>
            <Headings level={2}>Графік роботи</Headings>

            <p className="flex items-center gap-1">
              <Clock4 size={19} />
              Пн-Пт: 9:00 - 16:00
            </p>

            <p className="flex items-center gap-1">
              <Clock2 size={19} />
              Субота: 9:00 - 14:00
            </p>

            <p className="flex items-center gap-1">
              <Hourglass size={19} />
              Неділя: вихідний
            </p>
          </StandardInfoBlock>
        </address>
      </article>

      <article>
        <StandardInfoBlock>
          <Headings level={2}>Як нас знайти</Headings>

          <p className="mt-4">
            Наш магазин розташований у місті Івано-Франківськ, але ви завжди
            можете зателефонувати нам або надіслати електронний лист, якщо у вас
            є питання.
            <br />
            Ми завжди раді допомогти Вам у виборі найкращих прикрас та
            аксесуарів!
          </p>
        </StandardInfoBlock>
      </article>
    </section>
  );
}

export default ContactsPage;
