"use client";

import { useFormState, useFormStatus } from "react-dom";

import { changeMinOrder } from "./actions";

import { Input, Button, Tooltip } from "@nextui-org/react";

const initialState = {
  message: null,
};

function ExchangeRateEditor() {
  const [state, formAction] = useFormState(changeMinOrder, initialState);
  const { pending } = useFormStatus();

  return (
    <form action={formAction} className="flex flex-col items-center gap-4">
      <label htmlFor="rate" className="text-xl">
        Курс магазину
      </label>

      <Tooltip
        content={state.message}
        isOpen={!!state.message}
        placement="top-start"
        color="danger"
        showArrow
      >
        <Input
          type="number"
          id="rate"
          name="rate"
          required
          color="secondary"
          className="w-60"
        />
      </Tooltip>

      <Button
        type="submit"
        aria-disabled={pending}
        className="text-base font-semibold transition-all duration-300 rounded-md outline-none w-fit bg-amber-400 hover:bg-amber-500 text-lime-800 disabled:pointer-events-none disabled:opacity-50"
        disabled={pending}
        isLoading={pending}
      >
        Зберегти
      </Button>

      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}

export default ExchangeRateEditor;
