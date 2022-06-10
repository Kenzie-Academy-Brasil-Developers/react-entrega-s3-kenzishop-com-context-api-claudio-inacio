import { ContainerNav, DivButton, Navigator, Title } from "./styleNavBar";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { ImEnter } from "react-icons/im";
import { Link } from "react-router-dom";
import { CartContext } from "../../providers/cart";
import { useContext } from "react";

const NavBar = () => {
  const { cart } = useContext(CartContext);

  const TradeRoute = () => {
    return;
  };

  return (
    <ContainerNav>
      <Title>Kenzie Shop</Title>
      <Navigator>
        <Link to={"/carrinho"}>
          <button style={{ position: "relative" }}>
            <p
              style={{
                zIndex: "1",
                width: "15px",
                heigth: "15px",
                position: "absolute",
                borderRadius: "50%",
                color: "white",
                backgroundColor: "red",
                justifySelf: "flex-start",
              }}
            >
              {cart.length}
            </p>
            <AiOutlineShoppingCart />
            <p>Carrinho</p>
          </button>
        </Link>
        <Link to={"/"}>
          <button>
            <ImEnter />
            <p>Sair</p>
          </button>
        </Link>
      </Navigator>
    </ContainerNav>
  );
};

export default NavBar;
