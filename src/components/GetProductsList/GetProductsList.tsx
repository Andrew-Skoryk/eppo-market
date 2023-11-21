"use client";

import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";

import ProductsList from "../ProductsList";
import { Product } from "@prisma/client";
import { Spinner } from "@nextui-org/spinner";
import { Pagination } from "@nextui-org/pagination";

type Props = {
  category: string;
  subcategory: string;
  page: string;
};

function GetProductsList({ category, subcategory, page }: Props) {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery<Product[]>(["products", category, subcategory, page], () =>
    axios
      .get(`/api/products/${category}/${subcategory}/${page}`)
      .then(res => res.data.products),
  );

  const errorMessage = error as AxiosError;

  if (isLoading) return <Spinner label="Завантаження..." size="lg" />;
  if (errorMessage || !products) return <div>{errorMessage?.message}</div>;

  return (
    <>
      <ProductsList products={products} />

      <Pagination
        total={10}
        initialPage={1}
        showControls
        variant="faded"
        size="lg"
        showShadow
      />
    </>
  );
}

export default GetProductsList;
