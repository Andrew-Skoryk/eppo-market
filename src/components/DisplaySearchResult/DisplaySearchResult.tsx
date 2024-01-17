"use client";
import { useAuth } from "@clerk/nextjs";

import { Product } from "@prisma/client";
import { checkIfAdmin } from "@/lib/checkIfAdmin";

import ProductCard from "../ProductCard";
import AdminManageButtons from "../AdminManageButtons";

type Props = {
  products: Product[];
};

function DisplaySearchResult({ products }: Props) {
  // const { userId } = useAuth();
  // const additionalFunctionality = checkIfAdmin(userId || "");
  const additionalFunctionality = true;

  return (
    <section className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
      {products.map(product => (
        <div key={product.id} className="flex flex-col gap-2">
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

          {additionalFunctionality && <AdminManageButtons id={product.id} />}
        </div>
      ))}
    </section>
  );
}

export default DisplaySearchResult;
