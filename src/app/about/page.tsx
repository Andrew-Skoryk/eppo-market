import type { Metadata } from "next";
import Headings from "../../components/UI/Headings";
import StandardInfoBlock from "../../components/UI/StandardInfoBlock";

export const metadata: Metadata = {
  title: "Про нас - Eppo",
  description:
    "Eppo - це оптовий інтернет-магазин з більше ніж 10 років досвіду, який пропонує широкий асортимент якісної біжутерії.",
};

function AboutPage() {
  return (
    <section className="p-2 space-y-8 text-justify md:space-y-12">
      <Headings level={1}>Про нас</Headings>
      <article className="space-y-8 md:space-y-12">
        <StandardInfoBlock>
          <Headings level={2}>Eppo</Headings>
          <p>
            <span className="font-semibold text-amber-700 lg:text-lg">
              Eppo{" "}
            </span>
            - це оптовий інтернет-магазин, який доставить Вам щастя від
            зробленої покупки і задоволення від вибору товару.
          </p>
          <p>
            Ось уже понад 10 років ми пропонуємо клієнтам найкращий вибір
            біжутерії.
          </p>
          <p>
            На даний момент ми працюємо тільки з оптовими покупцями тому
            мінімальна сума замовлення становить - 800 грн.
          </p>
        </StandardInfoBlock>
        <StandardInfoBlock>
          <Headings level={2}>Широкий асортимент</Headings>
          <p>
            Завдяки багаторічному досвіду роботи з оптовою торгівлею на нашому
            сайті представлено більше 3000 моделей сережок, хрестиків, кулонів,
            перстнів, браслетів. Весь товар має колір 18-ти каратного золота.
          </p>
        </StandardInfoBlock>
        <StandardInfoBlock>
          <Headings level={2}>Найкращий сервіс</Headings>
          <p>
            Ми готові в будь-який час надати Вам підтримку в підборі потрібної
            моделі і розміру, відповісти на всі Ваші питання і допомогти зробити
            правильний вибір. Час доставки в обласні центри України займає 1 - 2
            дні.
          </p>
        </StandardInfoBlock>
        <StandardInfoBlock>
          <Headings level={2}>Повернення товару</Headings>
          <p>
            Ви можете обміняти або повернути модель якщо товар був зіпсований на
            заводі виробником. Товар який не підійшов за розміром, кольором,
            довжині і т.п. поверненню не підлягає.
          </p>
        </StandardInfoBlock>
        <p className="p-4 italic text-center">
          Якщо у Вас залишилися питання, ми з радістю на них відповімо!
        </p>
      </article>
    </section>
  );
}

export default AboutPage;
