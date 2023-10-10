"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

type FormValues = {
  query: string;
};

const SearchBar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = data => {
    router.push(`/search/${data.query}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex">
        <input
          {...register("query", { required: "Поле не повинно бути пустим" })}
          placeholder="Пошук за кодуванням товару"
          className="p-2 border rounded-l-md w-full outline-none"
        />

        <button
          type="submit"
          className="p-2 border rounded-r-md bg-amber-400 text-white w-min border-amber-500 hover:bg-amber-500 active:bg-amber-600 transition-colors duration-300"
        >
          <Search />
        </button>
      </div>

      {errors.query && (
        <span className="text-red-500 p-2">{errors.query.message}</span>
      )}
    </form>
  );
};

export default SearchBar;
