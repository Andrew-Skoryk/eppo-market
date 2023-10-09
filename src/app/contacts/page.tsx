import StandardInfoBlock from "@/components/UI/StandardInfoBlock";
import Headings from "../../components/UI/Headings";
import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Контакти - Eppo",
  description:
    "Знайдіть нас у м. Івано-Франківськ або зв’яжіться з нами за допомогою телефону чи електронної пошти для отримання додаткової інформації про нашу продукцію та послуги.",
};

function ContactsPage() {
  return (
    <section className="p-2">
      <Headings level={1}>Контакти</Headings>
      <article>
        <address className="not-italic">
          <Headings level={2}>Адреса магазину</Headings>
          <p>Інтернет-магазин</p>
          <p>м. Івано-Франківськ</p>
          <StandardInfoBlock>
            <Headings level={2}>Наші контакти</Headings>
            <p className="flex gap-1">
              <Phone />
              <Link href="tel:+380682128618">Kyivstar: +380682128618</Link>
            </p>
            <p className="flex gap-1">
              <Phone />
              <Link href="tel:+380931275947">Life: +380931275947</Link>
            </p>
            <p className="flex gap-1">
              <Phone />
              <Link href="tel:+380507237597">MTC: +380507237597</Link>
            </p>
            <p className="flex gap-1">
              <Mail />
              e-mail:{" "}
              <Link href="mailto:eppo.market@gmail.com" className="underline">
                eppo.market@gmail.com
              </Link>
            </p>
          </StandardInfoBlock>
          <StandardInfoBlock>
            <Headings level={2}>Графік роботи</Headings>
            <p>Пн-Пт: 9:00-16:00</p>
            <p>Субота: 9:00-14:00</p>
            <p>Неділя: вихідний</p>
          </StandardInfoBlock>
        </address>
      </article>
      <article className="mt-8 md:mt-12">
        <StandardInfoBlock>
          <Headings level={2}>Як нас знайти</Headings>
          <p className="mt-4">
            Наш магазин розташований у місті Івано-Франківськ, але ви завжди
            можете зателефонувати нам або надіслати електронний лист, якщо у вас
            є питання або потреба в додатковій інформації. Ми завжди раді
            допомогти вам у виборі найкращих прикрас та аксесуарів.
          </p>
        </StandardInfoBlock>
      </article>
    </section>
  );
}

export default ContactsPage;
