import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const ProductsContext = createContext([]);

export const CatalogProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const loadProducts = () => {
    api.get().then((response) => {
      setProducts(response.data);
    });
  };
  console.log(products);

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
