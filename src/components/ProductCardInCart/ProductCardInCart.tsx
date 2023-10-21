import React, { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { updateQuantity, removeItem } from "../../redux/slices/cartSlice";
import { useForm, Controller } from "react-hook-form";
import { CartItem } from "@/types/CartItem";
import { useSpring, animated } from "react-spring";
import { getMoneyFormat } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { Trash2 } from "lucide-react";
import debounce from "lodash/debounce";

type Props = {
  item: CartItem;
};

interface IFormInput {
  quantity: number;
}

function ProductCardInCart({ item }: Props) {
  const [isRemoving, setIsRemoving] = useState(false);
  const dispatch = useDispatch();
  const { control, handleSubmit, setValue } = useForm<IFormInput>();
  const fade = useSpring({ opacity: isRemoving ? 0 : 1 });

  const prevTotalPriceRef = useRef(item.price * item.quantity);
  const totalPrice = item.price * item.quantity;

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

  const onSubmit = (data: IFormInput) => {
    dispatch(updateQuantity({ id: item.id, quantity: data.quantity }));
  };

  const handleQuantityChange = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let newQuantity = +e.target.value;

      if (newQuantity > 998) {
        newQuantity = 999;
        e.target.value = "999";
      }

      if (!newQuantity || newQuantity <= 0) {
        newQuantity = 1;
        e.target.value = "1";
      }

      setValue("quantity", newQuantity, { shouldValidate: true });

      if (newQuantity !== item.quantity) {
        dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
      }
    },
    400,
  );

  return (
    <animated.div
      style={fade}
      className="flex items-center justify-between p-4 m-2 space-x-4 transition-colors duration-300 bg-gray-100 border rounded-md shadow-lg hover:bg-gray-200"
    >
      <div className="flex items-center flex-grow space-x-4">
        <Image
          title={item.article}
          src={item.imgSrc}
          alt={item.article}
          loading="lazy"
          className="object-cover w-20 h-20 transition-transform duration-300 rounded-md hover:scale-150 cursor-pointer"
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-center space-x-2"
          title={"Кількість"}
        >
          <Controller
            name="quantity"
            control={control}
            defaultValue={item.quantity}
            rules={{ max: 999 }}
            render={({ field }) => (
              <input
                {...field}
                onChange={e => {
                  field.onChange(e);
                  handleQuantityChange(e);
                }}
                type="number"
                required
                min="1"
                max="999"
                className="w-16 p-1 border rounded-md"
              />
            )}
          />
        </form>

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
    </animated.div>
  );
}

export default React.memo(ProductCardInCart);
