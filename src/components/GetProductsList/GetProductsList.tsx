"use client";

import { useParams } from "next/navigation";
import ProductsList from "../ProductsList";
import { Pagination } from "@nextui-org/react";

function GetProductsList() {
  const params = useParams();

  return (
    <>
      <span className="font-semibold text-blue-700">{params.slug}</span>
      <ProductsList />
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
