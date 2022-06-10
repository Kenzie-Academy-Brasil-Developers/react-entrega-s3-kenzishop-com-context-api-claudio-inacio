import CartList from "../../components/CartList/cartList";
import { CartContext } from "../../providers/cart";
import NavBar from "../../components/NavBar/navBar";
import {
  CountainerCarte,
  CountainerProducts,
  DivTotal,
  Resumo,
} from "./styleCarrinho";
import { useContext } from "react";

const Carrinho = () => {
  const { cart } = useContext(CartContext);

  const totalValue = cart.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
    0
  );

  return (
    <CountainerCarte>
      <NavBar />
      <CountainerProducts>
        <CartList />
        <DivTotal>
          <h1>Resumo do Pedido</h1>
          <Resumo>
            <span> {cart.length} produtos</span>
            <span>R$ {totalValue.toFixed(2)}</span>
          </Resumo>
          <button>Finalizar pedido</button>
        </DivTotal>
      </CountainerProducts>
    </CountainerCarte>
  );
};

export default Carrinho;
