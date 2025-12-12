import { useEffect, useState } from "react";

import PRODUCTS_DATA from "../../../shop-data.json";
import { ProductsContext } from "./products.context";

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };

  useEffect(() => {
    Promise.resolve(() => PRODUCTS_DATA)
      .then((data) => setProducts(data))
      .catch((error) => console.log("Products data fetch error:", error));
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
