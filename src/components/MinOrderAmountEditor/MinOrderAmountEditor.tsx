"use client";

import { useFormState, useFormStatus } from "react-dom";
import { changeMinOrder } from "./actions";

const initialState = {
  message: null,
};

function MinOrderAmountEditor() {
  const [state, formAction] = useFormState(changeMinOrder, initialState);
  const { pending } = useFormStatus();

  return (
    <form action={formAction}>
      <label htmlFor="todo">Мінімальна сума замовлення</label>

      <input type="number" id="price" name="price" required />

      <button type="submit" aria-disabled={pending}>
        Зберегти
      </button>

      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}

export default MinOrderAmountEditor;
