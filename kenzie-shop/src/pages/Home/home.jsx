import { useContext } from "react";
import ListProducts from "../../components/ListProdutcs/listProducts";
import NavBar from "../../components/NavBar/navBar";

import { CountainerHome, DivBody } from "./styleHome";

const Home = () => {
  return (
    <CountainerHome>
      <NavBar />
      <ListProducts />
    </CountainerHome>
  );
};

export default Home;
