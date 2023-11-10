"use client";

import { useQuery } from "react-query";
import ProductCard from "../ProductCard";
import axios from "axios";
import { Product } from "@prisma/client";

function ProductsList() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery<Product[]>("products", () =>
    axios.get("/api/products").then(res => res.data.products),
    );
  
  if (isLoading) return <div>Loading...</div>;
  if (error || !products) return <div>An error has occurred</div>;

  return (
    <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6">
      {products.map(product => (
        <ProductCard
          key={product.id}
          id={product.id}
          photo={product.photo}
          price={product.price}
          category={product.category}
          subcategory={product.subcategory}
          article={product.article}
          sizes={product.sizes}
        />
      ))}
    </div>
  );
}

export default ProductsList;
