import React from "react";
import ProductCard from "../ProductCard";
import { products } from "./products";

const ProductsList = () => {
  const addedProducts = [...products, ...products, ...products];
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {addedProducts.map(product => (
        <ProductCard
          key={product.id}
          imgSrc={product.imgSrc}
          price={product.price}
          subcategory={product.subcategory}
          article={product.article}
        />
      ))}
    </div>
  );
};

export default ProductsList;
