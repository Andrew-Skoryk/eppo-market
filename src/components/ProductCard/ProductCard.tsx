"use client";

import { memo, useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import { getMoneyFormat } from "@/lib/utils";
import { Product } from "@prisma/client";

import toast, { Toaster } from "react-hot-toast";
import { Select, SelectItem, Image as NextUIImage } from "@nextui-org/react";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { ShoppingBasket } from "lucide-react";

interface FormInput {
  quantity: number;
  size: number;
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

  const sizeOptions = sizes.split(",").filter(size => size.trim() !== "");

  const onSubmit = (data: FormInput) => {
    try {
      const newItem = {
        id,
        photo,
        price,
        category,
        subcategory,
        article,
        sizes,
        cartSizes: sizes
          ? [{ size: data.size, quantity: data.quantity }]
          : undefined,
        quantity: sizes ? undefined : data.quantity,
      };

      dispatch(addItem(newItem));
      setIsAdded(true);
      toast.success("Товар успішно додано!");
      setTimeout(() => setIsAdded(false), 750);
      reset({ quantity: 1 });
    } catch (error) {
      toast.error("Помилка при додаванні товару в корзину");
    }
  };

  return (
    <Card className="relative border-2 border-amber-400">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardHeader className="p-0 border-b border-amber-400">
          <NextUIImage
            src={photo}
            alt={article}
            loading="lazy"
            isBlurred={false}
            isZoomed={true}
            radius="none"
          />
        </CardHeader>

        <CardBody className="z-0 grid items-center grid-cols-2 p-0 text-sm">
          <div className="p-2">
            <p>{subcategory}</p>
            <p className="p-1 font-semibold">{article}</p>
          </div>

          <p className="flex items-center justify-center w-full h-full text-base font-semibold bg-amber-100">
            {getMoneyFormat(price)}
          </p>

          {sizeOptions.length > 0 && (
            <Controller
              name="size"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  defaultValue={sizeOptions[0]}
                  variant="faded"
                  label="Розмір"
                  radius="none"
                >
                  {sizeOptions.map(size => (
                    <SelectItem key={size} value={size} className="text-center">
                      {size}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
          )}

          <div className="pb-2 pl-2 bg-slate-100">
            <label htmlFor="quantity">Кількість:</label>
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
        </CardBody>

        <CardFooter>
          <Button
            type="submit"
            className="w-full font-semibold transition-all duration-300 rounded-md bg-amber-400 hover:bg-amber-500 text-lime-800 disabled:pointer-events-none disabled:opacity-50"
            isLoading={isAdded}
          >
            {!isAdded && (
              <>
                Додати до
                <ShoppingBasket />
              </>
            )}
          </Button>
        </CardFooter>
      </form>
      <Toaster position="bottom-center" />
    </Card>
  );
}

export default memo(ProductCard);
