import React from "react";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { StaticImageData } from "next/image";
import { ShoppingBasket } from "lucide-react";
import { useDispatch } from "react-redux";
import { addItem } from "../../../redux/slices/cartSlice";

type ProductCardProps = {
  id: string;
  imgSrc: StaticImageData;
  price: number;
  category: string;
  subcategory: string;
  article: string;
};

interface IFormInput {
  quantity: number;
}

const ProductCard = ({
  id,
  imgSrc,
  price,
  category,
  subcategory,
  article,
}: ProductCardProps) => {
  const { control, handleSubmit } = useForm<IFormInput>();
  const dispatch = useDispatch();

  const onSubmit = (data: { quantity: number }) => {
    dispatch(
      addItem({
        item: {
          id: id,
          imgSrc: imgSrc,
          price: price,
          category: category,
          subcategory: subcategory,
          article: article,
        },
        quantity: data.quantity,
      }),
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded-md">
      <div className="mb-4 relative h-64 w-full">
        <Image
          src={imgSrc}
          alt={article}
          layout="fill"
          objectFit="cover"
          className="rounded-md hover:scale-110 duration-300 transition-transform"
        />
      </div>
      <h2 className="text-lg font-semibold mb-2">{subcategory}</h2>
      <p className="text-gray-600 mb-4">Art.: {article}</p>
      <p className="text-xl font-bold mb-4">${price}</p>

      <div className="flex items-center mb-4">
        <label htmlFor="quantity" className="mr-2">
          Кількість:
        </label>
        <Controller
          name="quantity"
          control={control}
          defaultValue={1}
          render={({ field }) => (
            <input
              {...field}
              type="number"
              min="1"
              className="w-20 p-2 border rounded-md"
            />
          )}
        />
      </div>
      <button
        type="submit"
        className="w-full p-2 bg-amber-400 rounded-md hover:bg-amber-500 active:bg-amber-600 transition-colors duration-300 text-lime-800 font-semibold flex gap-3 justify-center"
      >
        Додати до
        <ShoppingBasket />
      </button>
    </form>
  );
};

export default ProductCard;
