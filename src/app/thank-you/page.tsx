import ButtonLink from "@/components/UI/ButtonLink";
import Headings from "@/components/UI/Headings";

function ThankYou() {
  return (
    <div className="flex flex-col gap-12 text-center">
      <Headings level={1}>Дякуємо!</Headings>
      <p className="text-xl italic">Замовлення було успішно створено</p>
      <ButtonLink href="/">Повернутись на головну</ButtonLink>
    </div>
  );
}

export default ThankYou;
