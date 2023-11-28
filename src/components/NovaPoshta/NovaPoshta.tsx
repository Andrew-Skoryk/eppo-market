import { useFormState, useFormStatus } from "react-dom";
import { fetchCity } from "./actions";

const initialState = {
  message: null,
};

function NovaPoshta() {
  const [state, formAction] = useFormState(fetchCity, initialState);
  const { pending } = useFormStatus();

  return (
    <form action={formAction}>
      <label htmlFor="todo">Введіть назву міста</label>

      <input type="text" id="city" name="city" required />

      <button type="submit" aria-disabled={pending}>
        Add
      </button>

      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}

export default NovaPoshta;
