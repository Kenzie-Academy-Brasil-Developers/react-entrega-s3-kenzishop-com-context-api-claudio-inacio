import React from "react";
import { Route, Switch } from "react-router-dom";
import Carrinho from "../pages/Carrinho/carrinho";
import Home from "../pages/Home/home";
import { CartProvider } from "../providers/cart";
import { CatalogProvider } from "../providers/productsCatalog";

const Routes = () => {
  return (
    <CatalogProvider>
      <CartProvider>
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={"/carrinho"}>
            <Carrinho />
          </Route>
        </Switch>
      </CartProvider>
    </CatalogProvider>
  );
};

export default Routes;
