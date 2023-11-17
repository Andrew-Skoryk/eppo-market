import React from "react";
import {
  Control,
  Controller,
  FieldValues,
  Path,
  PathValue,
} from "react-hook-form";
import { Tooltip } from "@nextui-org/react";
import { cn } from "../../lib/utils";

type Props<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  defaultValue?: number;
  onChange?: (value: string) => void;
};

function QuantityController<T extends FieldValues>({
  control,
  name,
  onChange,
  defaultValue = 1,
}: Props<T>) {
  const min = 1;
  const max = 999;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue as PathValue<T, Path<T>>}
      rules={{
        required: "Будь ласка, введіть кількість",
        min: { value: min, message: `Мінімальна кількість ${min}` },
        max: { value: max, message: `Максимальна кількість ${max}` },
      }}
      render={({ field, fieldState: { error }, }) => (
        <Tooltip
          content={error?.message}
          isOpen={!!error}
          placement="bottom"
          color="danger"
          showArrow
        >
          <input
            {...field}
            type="number"
            onChange={e => {
              field.onChange(e.target.value);
              if (onChange) {
                onChange(e.target.value);
              }
            }}
            className={cn("w-14 p-2 border rounded-md text-center", {
              "border-red-500": error,
            })}
          />
        </Tooltip>
      )}
    />
  );
}

export default QuantityController;
