import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import { Card, CardContainer } from "./styleCartProducts";

const CartProducts = ({ product, type }) => {
  const { addCart, cart, removeCart } = useContext(CartContext);
  console.log(cart);
  return (
    <CardContainer>
      <Card>
        <img src={product.image} alt="" />
        <span>{product.title}</span>

        <div>
          <span>{product.price}</span>
          {type == "add" ? (
            <button onClick={() => addCart(product)}>Adicionar Carrinho</button>
          ) : (
            <button onClick={() => removeCart(product)}>
              Remover do Carrinho
            </button>
          )}
        </div>
      </Card>
    </CardContainer>
  );
};

export default CartProducts;
