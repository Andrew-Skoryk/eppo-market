import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { updateQuantity, removeItem } from "../../../redux/slices/cartSlice";
import { useForm, Controller } from "react-hook-form";
import { CartItem } from "@/types/CartItem";
import { useSpring, animated } from "react-spring";
import { getMoneyFormat } from "@/lib/utils";

type ProductCardInCartProps = {
  item: CartItem;
};

interface IFormInput {
  quantity: number;
}

const ProductCardInCart: React.FC<ProductCardInCartProps> = ({ item }) => {
  const [isRemoving, setIsRemoving] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm<IFormInput>();
  const prevTotalPriceRef = useRef(item.price * item.quantity);
  const totalPrice = item.price * item.quantity;
  const fade = useSpring({ opacity: isRemoving ? 0 : 1 });

  useEffect(() => {
    prevTotalPriceRef.current = totalPrice;
  }, [totalPrice]);

  const priceAnimation = useSpring({
    number: totalPrice,
    from: { number: prevTotalPriceRef.current },
    reset: true,
    config: {
      tension: 170,
      friction: 26,
      precision: 0.01,
    },
  });

  const handleRemoveItem = () => {
    setIsRemoving(true);
    setTimeout(() => dispatch(removeItem(item.id)), 400);
  };

  const onSubmit = async (data: IFormInput) => {
    setIsUpdating(true);
    dispatch(updateQuantity({ id: item.id, quantity: data.quantity }));
    setIsUpdating(false);
  };

  return (
    <animated.div
      style={fade}
      className="flex items-center justify-between p-4 m-2 space-x-4 transition-colors duration-300 bg-gray-100 border rounded-md shadow-lg hover:bg-gray-200"
    >
      <div className="flex items-center flex-grow space-x-4">
        <Image
          src={item.imgSrc}
          alt={item.article}
          loading="lazy"
          className="object-cover w-20 h-20 transition-transform duration-300 rounded-md hover:scale-150"
        />
        <div>
          <h2 className="text-lg font-semibold">{item.article}</h2>
          <p className="text-gray-500">{getMoneyFormat(item.price)}</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-center space-x-2"
        >
          <Controller
            name="quantity"
            control={control}
            defaultValue={item.quantity}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                min="1"
                max="999"
                className="w-16 p-1 border rounded-md"
              />
            )}
          />
          <button
            type="submit"
            disabled={isUpdating}
            className={`bg-green-500 p-2 text-white rounded 
                        ${
                          isUpdating
                            ? "cursor-not-allowed opacity-50"
                            : "hover:bg-green-600"
                        } 
                        focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200`}
          >
            {isUpdating ? "Оновлення..." : "Обновити"}
          </button>
        </form>
        <button
          onClick={handleRemoveItem}
          className="p-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200"
        >
          Видалити
        </button>
      </div>

      <animated.div className="w-24 text-lg font-semibold text-center">
        {priceAnimation.number.to(n => getMoneyFormat(n))}
      </animated.div>
    </animated.div>
  );
};

export default React.memo(ProductCardInCart);
