"use client";

import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";

import ProductsList from "../ProductsList";
import { Product } from "@prisma/client";
import { Spinner } from "@nextui-org/spinner";
import { Pagination } from "@nextui-org/pagination";

function GetProductsList({ params }: { params: string }) {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery<Product[]>("products", () =>
    axios.get("/api/products").then(res => res.data.products),
  );

  const errorMessage = error as AxiosError;

  if (isLoading) return <Spinner label="Завантаження..." size="lg" />;
  if (errorMessage || !products) return <div>{errorMessage.message}</div>;

  return (
    <>
      <span className="font-semibold text-blue-700">{params}</span>

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
