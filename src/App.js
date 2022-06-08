import React from "react";
import { NavBar } from "./Components/NavBar/Navbar";
//import { ProductsList } from "./Components/products";
import "boxicons";
import { Products } from "./Components/Products/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
