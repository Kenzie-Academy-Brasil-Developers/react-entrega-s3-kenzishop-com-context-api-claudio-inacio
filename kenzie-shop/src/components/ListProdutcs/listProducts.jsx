import { ProductsContext } from "../../providers/productsCatalog";
import { useContext } from "react";
import CardProducts from "../CardProducts/cardProducts";
import { ContainerList } from "./styleList";

const ListProducts = () => {
  const { products } = useContext(ProductsContext);

  return (
    <ul>
      <ContainerList>
        {products.map((product) => {
          return <CardProducts product={product} type="add" />;
        })}
      </ContainerList>
    </ul>
  );
};

export default ListProducts;
