"use client";

import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";

import { clientProduct } from "@/types/clietProduct";
import { useCreateProduct } from "@/hooks/useCreateProduct";

import {
  Input,
  CheckboxGroup,
  Checkbox,
  Select,
  SelectItem,
  Button,
} from "@nextui-org/react";
import Headings from "../UI/Headings";
import ImageUploader from "../ImageUploader/ImageUploader";

import { categories } from "@/configs/categories";
import { subcategories } from "@/configs/subcategories";

const productSchema = z.object({
  article: z
    .string()
    .min(1, "Вкажіть Артикул!")
    .max(191, "Артикул занадто довгий!"),
  price: z.number().min(0.1, "Ціна занадто мала!"),
  photo: z.string(),
  category: z.string().min(1, "Оберіть Категорію!"),
  subcategory: z.string().min(1, "Оберіть Підкатегорію!"),
  sizes: z.string(),
});

function CreateProductForm() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
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
    if (!selectedFile) {
      alert("Будь ласка, виберіть фото для товару.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const uploadResponse = await axios.post("/api/photo", formData);
      const photoUrl = uploadResponse.data.url;

      if (!photoUrl) {
        alert("Помилка при завантаженні фото.");
        return;
      }

      data.photo = photoUrl;
      console.log(photoUrl);

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
      <div className="flex items-center gap-16">
        <Controller
          name="article"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              value={field.value}
              label="Артикул"
              labelPlacement="outside"
              placeholder="Введіть артикул товару"
              className="max-w-xs"
            />
          )}
        />
        {errors.article && (
          <p className="text-red-500">{errors.article.message}</p>
        )}
      </div>

      <div className="flex items-center gap-16">
        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              value={field.value.toString()}
              onChange={e => field.onChange(+e.target.value)}
              type="number"
              label="Ціна"
              placeholder="Вкажіть ціну товару"
              className="max-w-xs"
            />
          )}
        />
        {errors.price && <p className="text-red-500">{errors.price.message}</p>}
      </div>

      <ImageUploader onFileSelect={setSelectedFile} />

      <div className="flex justify-between gap-40 pr-16">
        <div className="w-full space-y-3">
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
          {errors.category && (
            <p className="text-red-500">{errors.category.message}</p>
          )}
        </div>

        <div className="w-full space-y-3">
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
          {errors.subcategory && (
            <p className="text-red-500">{errors.subcategory.message}</p>
          )}
        </div>
      </div>

      {subcategory === "Кольца" && (
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

      <Button type="submit" className="self-center w-fit">
        Зберегти
      </Button>
    </form>
  );
}

export default CreateProductForm;
