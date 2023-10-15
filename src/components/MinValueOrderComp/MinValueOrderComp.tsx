import { MINIMUM_ORDER_AMOUNT } from "../../config";

const MinValueOrderBlock = () => {
  return (
    <p className="p-2 text-lg text-orange-600 bg-amber-50">
      Зверніть увагу: мінімальна сума замовлення {MINIMUM_ORDER_AMOUNT}грн.
    </p>
  );
};

export default MinValueOrderBlock;
