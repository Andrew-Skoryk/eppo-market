"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { MINIMUM_ORDER_AMOUNT } from "../../config";
import Headings from "../UI/Headings";
import { Button } from "@nextui-org/react";

type FormData = {
  minOrderAmount: number;
};

const MinOrderAmountEditor: React.FC = () => {
  const { handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    alert(`Мінімальна сума замовлення була змінена на: ${data.minOrderAmount}`);
  };

  return (
    <div className="max-w-lg p-4 mx-auto mt-12 bg-white rounded-lg shadow-md">
      <Headings level={2}>Редагування мінімальної суми замовлення</Headings>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium"
            htmlFor="minOrderAmount"
          >
            Мінімальна сума замовлення:
          </label>
          <input
            type="number"
            id="minOrderAmount"
            name="minOrderAmount"
            defaultValue={MINIMUM_ORDER_AMOUNT}
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
          />
          {/* {errors.minOrderAmount && (
            <p className="mt-1 text-xs text-red-500">
              Це поле є обов`&apos;язковим
            </p> */}
          {/* )} */}
        </div>

        <Button>Зберегти</Button>
      </form>
    </div>
  );
};

export default MinOrderAmountEditor;
