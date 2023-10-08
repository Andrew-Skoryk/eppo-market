import { MINIMUM_ORDER_AMOUNT } from "../../config";

const MinValueOrderComp = () => {
  return (
    <p className="text-lg text-orange-600 bg-amber-50 p-2">
      Зверніть увагу: мінімальна сума замовлення {MINIMUM_ORDER_AMOUNT}грн.
    </p>
  );
};

export default MinValueOrderComp;
