"use client";

import { useFormState, useFormStatus } from "react-dom";

import { Input, Button, Tooltip } from "@nextui-org/react";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  label: {
    name: string;
    value: string;
  };
  action: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _prevState: any,
    formData: FormData,
  ) => Promise<
    | { message: string; status?: undefined }
    | { status: string; message?: undefined }
  >;

  defaultValue: number | undefined;
};

const initialState = {
  message: undefined,
  status: "idle",
};

function AdminSettingsEditor({ label, action, defaultValue }: Props) {
  const [state, formAction] = useFormState(action, initialState);
  const { pending } = useFormStatus();

  useEffect(() => {
    if (state.status === "success") {
      toast.success("Данні успішно змінено");
    }
  }, [state.status]);

  return (
    <form action={formAction} className="flex flex-col items-center gap-4">
      <label htmlFor={label.name} className="text-xl">
        {label.value}
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
          id={label.name}
          name={label.name}
          required
          color="secondary"
          className="w-60"
          defaultValue={defaultValue?.toString()}
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

      <Toaster
        position="bottom-center"
        containerStyle={{
          bottom: "75px",
        }}
      />
    </form>
  );
}

export default AdminSettingsEditor;
