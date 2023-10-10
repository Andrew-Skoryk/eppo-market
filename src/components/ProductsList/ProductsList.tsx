import React from "react";
import ProductCard from "../ProductCard";
import { products } from "./products";

function ProductsList() {
  const addedProducts = [...products, ...products, ...products];
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {addedProducts.map(product => (
        <ProductCard
          key={product.id}
          id={product.id}
          imgSrc={product.imgSrc}
          price={product.price}
          category={product.category}
          subcategory={product.subcategory}
          article={product.article}
        />
      ))}
    </div>
  );
};

export default ProductsList;
