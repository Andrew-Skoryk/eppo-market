import { Product } from "@prisma/client";
import ProductCard from "../ProductCard";

type Props = {
  products: Product[];
}

function ProductsList({ products }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
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
