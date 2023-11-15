import { memo, useCallback, useMemo, useRef, useState } from "react";
import debounce from "lodash/debounce";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  updateQuantity,
  removeItem,
  removeSizeFromItem,
} from "../../redux/slices/cartSlice";
import { getMoneyFormat } from "@/lib/utils";

import { CartItem } from "@/types/CartItem";
import { useSpring, animated } from "react-spring";
import { Button } from "@nextui-org/react";
import { Trash2, X } from "lucide-react";

type Props = {
  item: CartItem;
};

interface IFormInput {
  [key: string]: number;
}

function ProductCardInCart({ item }: Props) {
  const [isRemoving, setIsRemoving] = useState(false);
  const dispatch = useDispatch();
  const fade = useSpring({ opacity: isRemoving ? 0 : 1 });
  const { control, handleSubmit, setValue } = useForm<IFormInput>();

  const calculateTotalPrice = () => {
    if (item.cartSizes && item.cartSizes.length > 0) {
      return item.cartSizes.reduce(
        (total, cartSize) => total + cartSize.quantity * item.price,
        0,
      );
    }
    return item.quantity ? item.price * item.quantity : 0;
  };

  const totalPrice = calculateTotalPrice();
  const prevTotalPriceRef = useRef(totalPrice);
  const isRing = item.subcategory === "Кольца";

  const priceAnimation = useSpring({
    number: totalPrice,
    from: { number: prevTotalPriceRef.current },
    reset: true,
    config: {
      tension: 170,
      friction: 26,
      precision: 1,
    },
  });

  const handleRemoveItem = useCallback(() => {
    setIsRemoving(true);
    setTimeout(() => dispatch(removeItem(item.id)), 400);
  }, [dispatch, item.id]);

  const handleRemoveSize = useCallback(
    (size: number) => {
      if (item.cartSizes?.length === 1) {
        handleRemoveItem();
        return;
      }

      setIsRemoving(true);
      dispatch(removeSizeFromItem({ id: item.id, size }));
      setTimeout(() => setIsRemoving(false), 200);
    },
    [dispatch, handleRemoveItem, item.cartSizes?.length, item.id],
  );

  const onSubmit = (data: IFormInput) => {
    Object.entries(data).forEach(([key, quantity]) => {
      if (key === "quantity_general") {
        // Для товарів без розміру
        dispatch(updateQuantity({ id: item.id, quantity }));
      } else {
        // Для товарів з розміром
        const sizePart = key.split("_")[1];
        const size = parseInt(sizePart, 10);

        dispatch(updateQuantity({ id: item.id, size, quantity }));
      }
    });
  };

  const debouncedUpdateQuantity = useMemo(
    () =>
      debounce((id, size, quantity) => {
        dispatch(updateQuantity({ id, size, quantity }));
      }, 400),
    [dispatch],
  );

  const handleQuantityChange = useCallback(
    (size: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newQuantity = +e.target.value;

      // Валідація значення
      if (newQuantity < 1 || newQuantity > 999) {
        toast.error("Неправильна кількість: вкажіть число від 1 до 999");
        return;
      }

      setValue(`quantity_${size}`, newQuantity);
      const sizeValue =
        size !== "quantity_general" ? parseInt(size, 10) : undefined;
      debouncedUpdateQuantity(item.id, sizeValue, newQuantity);
    },
    [setValue, debouncedUpdateQuantity, item.id],
  );

  return (
    <animated.div
      style={fade}
      className="flex items-center justify-between p-4 m-2 space-x-4 transition-colors duration-300 bg-gray-100 border rounded-md shadow-lg hover:bg-gray-200"
    >
      <div className="flex items-center flex-grow space-x-4">
        <Image
          title={item.article}
          src={item.photo}
          alt={item.article}
          width={500}
          height={300}
          loading="lazy"
          className="object-cover w-20 h-20 transition-transform duration-300 rounded-md cursor-pointer hover:scale-150"
        />
        <div>
          <h2 title="Артикул" className="text-lg font-semibold">
            {item.article}
          </h2>

          <p title="Ціна за одиницю" className="text-gray-500">
            {getMoneyFormat(item.price)}
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        {!isRing ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center space-x-2"
            title={"Кількість"}
          >
            <Controller
              name="quantity"
              control={control}
              defaultValue={item.quantity}
              render={({ field }) => (
                <input
                  {...field}
                  onChange={e => {
                    field.onChange(e);
                    handleQuantityChange("quantity_general")(e);
                  }}
                  type="number"
                  min={1}
                  required
                  className="w-16 p-1 border rounded-md"
                />
              )}
            />
          </form>
        ) : (
          <div>
            {item.cartSizes!.map(cartSize => (
              <div
                key={cartSize.size}
                className="flex items-center justify-between gap-2"
              >
                <p>
                  Розмір: <span className="font-medium">{cartSize.size}</span>
                </p>

                <form
                  onSubmit={handleSubmit(data => onSubmit(data))}
                  className="flex items-center gap-1"
                >
                  <Controller
                    name={`quantity_${cartSize.size}`}
                    control={control}
                    defaultValue={cartSize.quantity}
                    render={({ field }) => (
                      <input
                        {...field}
                        onChange={e => {
                          field.onChange(e);
                          handleQuantityChange(cartSize.size.toString())(e);
                        }}
                        type="number"
                        min={1}
                        max={999}
                        required
                        className="w-16 p-1 border rounded-md"
                      />
                    )}
                  />

                  <button
                    onClick={() => handleRemoveSize(cartSize.size)}
                    title="Видалити"
                    className="bg-red-300 rounded-md hover:bg-red-400"
                  >
                    <X size={20} />
                  </button>
                </form>
              </div>
            ))}
          </div>
        )}

        <animated.div
          className="w-24 text-lg font-semibold text-center"
          title={"Загальна сума"}
        >
          {priceAnimation.number.to(n => getMoneyFormat(n))}
        </animated.div>

        <Button
          onClick={handleRemoveItem}
          title="Видалити"
          isIconOnly
          size="sm"
          className="bg-red-300 hover:bg-red-400"
        >
          <Trash2 />
        </Button>
      </div>
      <Toaster />
    </animated.div>
  );
}

export default memo(ProductCardInCart);
