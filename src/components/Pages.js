import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import { ProductsList } from "./products/Products";

export const Pages = () => {
  return (
    <section>
      <Route>
        <Route path="/" exact element={Home} />
        <Route path="/products" exact element={ProductsList} />
      </Route>
    </section>
  );
};
