import { useContext } from "react";

import { ProductsContext } from "../../contexts/products/products.context";
import { ProductCard } from "../../components/product-card/product-card.component";

import "./shop.styles.scss";

export const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      <h2>Shop Page</h2>
      <div className="products-container">
        {!!products.length &&
          products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
};
