import React from "react";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { StaticImageData } from "next/image";

type ProductCardProps = {
  imgSrc: StaticImageData;
  price: number;
  subcategory: string;
  article: string;
};

interface IFormInput {
  quantity: number;
}

const ProductCard = ({
  imgSrc,
  price,
  subcategory,
  article,
}: ProductCardProps) => {
  const { control, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: { quantity: number }) => {
    alert(`Added ${data.quantity} of item ${article} to the cart!`);
    // Implement add to cart functionality here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded-md">
      <div className="mb-4 relative h-64 w-full">
        <Image
          src={imgSrc}
          alt={article}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h2 className="text-lg font-semibold mb-2">{subcategory}</h2>
      <p className="text-gray-600 mb-4">Art.: {article}</p>
      <p className="text-xl font-bold mb-4">${price}</p>

      <div className="flex items-center mb-4">
        <label htmlFor="quantity" className="mr-2">
          Quantity:
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
        className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </form>
  );
};

export default ProductCard;
