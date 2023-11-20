"use client";

import { useCallback } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { Tooltip } from "@nextui-org/react";

type FormValues = {
  query: string;
};

const SearchBar = () => {
  const { control, handleSubmit, reset } = useForm<FormValues>();
  const router = useRouter();

  const onSubmit = useCallback<SubmitHandler<FormValues>>(
    data => {
      reset();
      router.push(`/search/${data.query}`);
    },
    [reset, router],
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex">
      <Controller
        name="query"
        control={control}
        rules={{
          required: "Поле не повинно бути пустим",
        }}
        render={({ field, fieldState: { error } }) => (
          <Tooltip
            content={error?.message}
            isOpen={!!error}
            color="danger"
            placement="bottom-start"
            
          >
            <input
              {...field}
              placeholder="Пошук за кодуванням товару"
              className="rounded-l-md pl-1 w-full outline-none"
            />
          </Tooltip>
        )}
      />
      <button
        type="submit"
        className="p-2 border rounded-r-md bg-amber-400 text-white w-min border-amber-500 hover:bg-amber-500 active:bg-amber-600 transition-colors duration-300"
      >
        <Search />
      </button>
    </form>
  );
};

export default SearchBar;
