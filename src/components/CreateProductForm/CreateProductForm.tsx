"use client";

import { FC, useState, ChangeEvent } from "react";
import {
  Input,
  CheckboxGroup,
  Checkbox,
  Spacer,
  Select,
  SelectItem,
} from "@nextui-org/react";
import Headings from "../UI/Headings";
import ButtonLink from "../UI/ButtonLink";

const CreateProductForm: FC = () => {
  const [subcategory, setSubcategory] = useState<string>("");
  const [sizes, setSizes] = useState<string[]>([]);

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

  return (
    <div className="p-4 space-y-5">
      <Input label="Price" type="number" placeholder="Enter product price" />
      <Spacer y={1} />
      <Input label="Photo URL" placeholder="Enter product photo URL" />
      <Spacer y={1} />

      <div className="flex gap-40 pr-12">
        <Select placeholder="Категорію" onChange={handleSubcategoryChange}>
          <SelectItem value="ring" key="ring">
            Ring
          </SelectItem>
          <SelectItem value="necklace" key="necklace">
            Necklace
          </SelectItem>
        </Select>

        <Select
          placeholder="Оберіть підкатегорію"
          onChange={handleSubcategoryChange}
        >
          <SelectItem value="ring" key="ring">
            Ring
          </SelectItem>
          <SelectItem value="necklace" key="necklace">
            Necklace
          </SelectItem>
        </Select>
      </div>

      <Spacer y={1} />
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
      <Spacer y={1} />

      <ButtonLink>Зберегти</ButtonLink>
    </div>
  );
};

export default CreateProductForm;
