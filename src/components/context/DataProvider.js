import React, { useState, useEffect, createContext, useState } from "react";
import Data from "Data.js";
export const DataContext = createContext();

export const Data = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const product = Data;
    setProducts(product);
  }, []);

  const value = {
    products: products,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
