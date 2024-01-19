"use client";

import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";

import ProductsList from "../ProductsList";
import { Product } from "@prisma/client";
import { Spinner } from "@nextui-org/spinner";
import { Pagination } from "@nextui-org/pagination";
import Headings from "../UI/Headings";

type Props = {
  category: string;
  subcategory: string;
  page: number;
  totalPages: number;
  categoryMaping: string;
  subcategoryMaping: string;
  exchangeRate: number;
};

function GetProductsList({
  category,
  subcategory,
  page,
  totalPages,
  categoryMaping,
  subcategoryMaping,
  exchangeRate,
}: Props) {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery<Product[]>(["products", category, subcategory, page], () =>
    axios
      .get(`/api/products/${category}/${subcategory}/${page}`)
      .then(res => res.data.products),
  );
  const router = useRouter();

  const handlePageChange = (newPage: number) => {
    router.push(`/category/${categoryMaping}/${subcategoryMaping}/${newPage}`);
  };

  const errorMessage = error as AxiosError;

  if (isLoading) return <Spinner label="Завантаження..." size="lg" />;
  if (errorMessage || !products) return <div>{errorMessage?.message}</div>;
  if (products.length === 0)
    return (
      <Headings level={2}>Товари в цій категорії відсутні, на жаль</Headings>
    );

  return (
    <>
      <ProductsList products={products} exchangeRate={exchangeRate} />

      <Pagination
        total={totalPages}
        initialPage={+page || 1}
        onChange={handlePageChange}
        showControls
        variant="faded"
        size="lg"
        showShadow
      />
    </>
  );
}

export default GetProductsList;
