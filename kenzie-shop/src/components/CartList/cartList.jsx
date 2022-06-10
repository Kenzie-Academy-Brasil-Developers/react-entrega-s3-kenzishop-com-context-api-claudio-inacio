import { useContext } from "react";
import { ContainerCart, Title } from "./cartListStyle";
import { CartContext } from "../../providers/cart";

import CartProducts from "../CartProducts/cartProducts";

const CartList = () => {
  const { cart } = useContext(CartContext);

  return (
    <ul>
      <ContainerCart>
        <Title>
          <p>Produto</p>
          <p>Valor</p>
        </Title>
        {cart.map((product) => {
          return <CartProducts product={product} />;
        })}
      </ContainerCart>
    </ul>
  );
};

export default CartList;
