type Props = {
  minOrderAmount: number | undefined;
};

const MinValueOrderBlock = async ({ minOrderAmount }: Props) => {
  return (
    <p className="p-2 text-lg text-orange-600 bg-amber-50">
      Зверніть увагу: мінімальна сума замовлення {minOrderAmount}грн.
    </p>
  );
};

export default MinValueOrderBlock;
