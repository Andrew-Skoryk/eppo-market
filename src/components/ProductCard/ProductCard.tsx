"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { ShoppingBasket } from "lucide-react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import { getMoneyFormat } from "@/lib/utils";
import AnimatedAddedBlock from "../AnimatedAddedBlock";
import { Product } from "@prisma/client";

interface FormInput {
  quantity: number;
}

function ProductCard({
  id,
  photo,
  price,
  category,
  subcategory,
  article,
  sizes,
}: Product) {
  const dispatch = useDispatch();
  const { control, handleSubmit, reset } = useForm<FormInput>();
  const [isAdded, setIsAdded] = useState(false);

  const onSubmit = (data: FormInput) => {
    dispatch(
      addItem({
        item: { id, photo, price, category, subcategory, article, sizes },
        quantity: data.quantity,
      }),
    );
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
    reset({ quantity: 1 });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-2 text-center transition-colors duration-300 border rounded-md shadow-lg hover:bg-slate-200"
    >
      <div className="w-full h-56 mb-4">
        <Image
          src={photo}
          alt={article}
          width={500}
          height={300}
          loading="lazy"
          className="object-cover w-full h-full transition-transform duration-300 rounded-md cursor-pointer hover:scale-110"
        />
      </div>

      <h2 className="mb-2 text-lg font-bold text-gray-900">{subcategory}</h2>
      <p className="mb-4 text-sm text-gray-600">Art.: {article}</p>
      <p className="mb-4 text-xl font-semibold text-amber-600">
        {getMoneyFormat(price)}
      </p>
      <div className="flex items-center mb-4">
        <label htmlFor="quantity" className="mr-2">
          Кількість:
        </label>
        <Controller
          name="quantity"
          control={control}
          defaultValue={1}
          rules={{
            required: "Будь ласка, введіть кількість",
            min: { value: 1, message: "Мінімальна кількість - 1" },
            max: { value: 999, message: "Максимальна кількість - 999" },
          }}
          render={({ field }) => (
            <input
              {...field}
              type="number"
              min="1"
              max="999"
              className="w-20 p-2 border rounded-md"
            />
          )}
        />
      </div>
      <button
        type="submit"
        className="flex justify-center w-full gap-3 p-2 font-semibold transition-all duration-300 rounded-md bg-amber-400 hover:bg-amber-500 active:bg-amber-600 text-lime-800 disabled:pointer-events-none disabled:opacity-50"
        disabled={isAdded}
      >
        Додати до
        <ShoppingBasket />
      </button>

      <AnimatedAddedBlock isAdded={isAdded} />
    </form>
  );
}

export default React.memo(ProductCard);
