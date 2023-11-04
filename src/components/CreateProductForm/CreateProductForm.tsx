"use client";

import {
  Input,
  CheckboxGroup,
  Checkbox,
  Select,
  SelectItem,
  Button
} from "@nextui-org/react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { clientProduct } from "@/types/clietProduct";
import { useCreateProduct } from "@/hooks/useCreateProduct";

import Headings from "../UI/Headings";
import ImageUploader from "../ImageUploader/ImageUploader";

import { categories } from "@/configs/categories";
import { subcategories } from "@/configs/subcategories";

const productSchema = z.object({
  article: z.string().max(191, "Артикул занадто довгий!"),
  price: z.number().min(0, "Ціна не може бути від'ємною!"),
  photo: z.string(),
  category: z.string(),
  subcategory: z.string(),
  sizes: z.string(),
});

function CreateProductForm() {
  const { handleSubmit, control, setValue, watch, formState } =
    useForm<clientProduct>({
      resolver: zodResolver(productSchema),
      defaultValues: {
        article: "",
        price: 0,
        photo: "",
        category: "",
        subcategory: "",
        sizes: "",
      },
    });
  const createProductMutation = useCreateProduct();

  const { errors } = formState;

  const subcategory = watch("subcategory");

  const onSubmit: SubmitHandler<clientProduct> = async data => {
    try {
      await createProductMutation.mutateAsync(data);
      alert("Товар успішно додано!");
    } catch (error) {
      alert("Помилка при додаванні товару. Будь ласка, спробуйте ще раз.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-4 space-y-12"
    >
      <Controller
        name="article"
        control={control}
        render={({ field }) => (
          <>
            <Input
              {...field}
              value={String(field.value)}
              label="Артикул"
              labelPlacement="outside"
              placeholder="Введіть артикул товару"
              className="max-w-xs"
            />
            {errors.article && (
              <p className="text-red-500">{errors.article.message}</p>
            )}
          </>
        )}
      />

      <Controller
        name="price"
        control={control}
        render={({ field }) => (
          <>
            <Input
              {...field}
              value={field.value === 0 ? "" : String(field.value)}
              label="Ціна"
              placeholder="Вкажіть ціну товару"
              className="max-w-xs"
            />
            {errors.price && (
              <p className="text-red-500">{errors.price.message}</p>
            )}
          </>
        )}
      />

      <ImageUploader />

      <div className="flex gap-40 pr-12">
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              placeholder="Оберіть Категорію"
              aria-label="Оберіть Категорію"
            >
              {categories.map(category => (
                <SelectItem
                  value={category.name}
                  key={category.name}
                  aria-label={category.name}
                >
                  {category.name}
                </SelectItem>
              ))}
            </Select>
          )}
        />

        <Controller
          name="subcategory"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              placeholder="Оберіть Підкатегорію"
              aria-label="Оберіть Підкатегорію"
            >
              {subcategories.map(subcategory => (
                <SelectItem
                  value={subcategory.name}
                  key={subcategory.name}
                  aria-label={subcategory.name}
                >
                  {subcategory.name}
                </SelectItem>
              ))}
            </Select>
          )}
        />
      </div>

      {subcategory === "ring" && (
        <div>
          <Headings level={3}>Оберіть розміри колець:</Headings>

          <Controller
            name="sizes"
            control={control}
            render={({ field }) => (
              <CheckboxGroup
                {...field}
                value={field.value.split(",")}
                onChange={value => {
                  if (Array.isArray(value)) {
                    setValue("sizes", value.join(","));
                  }
                }}
              >
                {Array.from({ length: 14 }, (_, idx) => idx + 12).map(size => (
                  <Checkbox key={size} value={size.toString()}>
                    {size}
                  </Checkbox>
                ))}
              </CheckboxGroup>
            )}
          />
        </div>
      )}

      <Button type="submit" className="self-center w-fit">Зберегти</Button>
    </form>
  );
}

export default CreateProductForm;
