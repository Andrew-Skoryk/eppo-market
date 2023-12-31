"use client";

import { memo, useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import { getMoneyFormat } from "@/lib/utils";
import { Product } from "@prisma/client";

import toast, { Toaster } from "react-hot-toast";
import {
  Select,
  SelectItem,
  Image as NextUIImage,
  Tooltip,
} from "@nextui-org/react";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { FormInput, ShoppingBasket } from "lucide-react";
import QuantityController from "../QuantityController";

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
        ringSizes: sizes
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
            className="z-0"
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
              rules={{
                required: "Будь ласка, оберіть розмір",
              }}
              render={({ field, fieldState: { error } }) => (
                <Tooltip
                  content={error?.message}
                  isOpen={!!error}
                  placement="top-start"
                  color="danger"
                >
                  <Select
                    {...field}
                    id={`size-select-${id}`}
                    variant="faded"
                    label="Розмір"
                    radius="none"
                    isInvalid={!!error}
                  >
                    {sizeOptions.map(size => (
                      <SelectItem key={size} value={size} aria-label={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </Select>
                </Tooltip>
              )}
            />
          )}

          <div className="pb-2 pl-2 bg-slate-100">
            <label htmlFor="quantity">Кількість:</label>

            <QuantityController<FormInput> control={control} name="quantity" />
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

      <Toaster
        position="bottom-center"
        containerStyle={{
          bottom: "75px",
        }}
      />
    </Card>
  );
}

export default memo(ProductCard);
