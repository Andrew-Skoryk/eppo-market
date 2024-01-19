"use client";

import { Product } from "@prisma/client";

import ProductCard from "../ProductCard";
import AdminManageButtons from "../AdminManageButtons";

type Props = {
  products: Product[];
  additionalFunctionality: boolean;
};

function DisplaySearchResult({ products, additionalFunctionality }: Props) {
  return (
    <section className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
      {products.map(product => (
        <div key={product.id} className="flex flex-col gap-0.5 items-center">
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

          {additionalFunctionality && <AdminManageButtons product={product} />}
        </div>
      ))}
    </section>
  );
}

export default DisplaySearchResult;
