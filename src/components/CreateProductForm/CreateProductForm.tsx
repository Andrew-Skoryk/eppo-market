"use client";

import { FC, useState, ChangeEvent, useMemo } from "react";
import {
  Input,
  CheckboxGroup,
  Checkbox,
  Select,
  SelectItem,
} from "@nextui-org/react";

import Headings from "../UI/Headings";
import ButtonLink from "../UI/ButtonLink";
import { categories } from "@/configs/categories";
import { subcategories } from "@/configs/subcategories";
import ImageUploader from "../ImageUploader/ImageUploader";

const CreateProductForm: FC = () => {
  const [_category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [sizes, setSizes] = useState<string[]>([]);

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    setCategory(value);
  };

  const handleSubcategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    setSubcategory(value);

    if (value === "ring") {
      setSizes([]);
    }
  };

  const handleSizeChange = (
    valueOrEvent: string[] | React.FormEvent<HTMLDivElement>,
  ) => {
    if (Array.isArray(valueOrEvent)) {
      setSizes(valueOrEvent);
    }
  };

  const selectedSubcategory = useMemo(
    () => subcategories.find(sc => sc.name === subcategory),
    [subcategory],
  );

  return (
    <div className="flex flex-col p-4 space-y-12">
      <div className="flex items-center gap-2">
        {selectedSubcategory && (
          <p className="p-2 -mr-2 font-semibold rounded-md bg-zinc-100">
            {selectedSubcategory.code}
          </p>
        )}
        <Input
          type="number"
          placeholder="Введіть артикул товару"
          className="max-w-xs"
        />
      </div>

      <Input
        label="Ціна"
        type="number"
        placeholder="Вкажіть ціну товару"
        className="max-w-xs"
      />

      <ImageUploader />

      <div className="flex gap-40 pr-12">
        <Select
          placeholder="Оберіть Категорію"
          onChange={handleCategoryChange}
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

        <Select
          placeholder="Оберіть Підкатегорію"
          onChange={handleSubcategoryChange}
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
      </div>

      {subcategory === "ring" && (
        <div>
          <Headings level={3}>Оберіть розміри колець:</Headings>

          <CheckboxGroup value={sizes} onChange={handleSizeChange}>
            {Array.from({ length: 14 }, (_, idx) => idx + 12).map(size => (
              <Checkbox key={size} value={size.toString()}>
                {size}
              </Checkbox>
            ))}
          </CheckboxGroup>
        </div>
      )}

      <ButtonLink className="self-center w-fit">Зберегти</ButtonLink>
    </div>
  );
};

export default CreateProductForm;
