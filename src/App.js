import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import Container from "./components/Container/Container";
import HeroSlider from "./components/HeroSlider";
import Counter from "./components/Container/Counter/Counter";
import Counter2 from "./components/Counter2/Counter2";
import Card from "./components/Card";

function App() {
  const [mostrar, setMostrar] = useState(true);
  console.log(mostrar);

  const mostrarCounter = () => {
    setMostrar(!mostrar);
  };
  return (
    <React.Fragment>
      <Navbar />
      <HeroSlider></HeroSlider>
      <ItemListContainer />
      <Counter2 />
      <Container>
        <hr></hr>
        <Card />
        <Counter></Counter>
        <button className="btn btn-primary" onClick={mostrarCounter}>
          Mostrar/Ocultar
        </button>
        {mostrar ? "mostrando" : "Ocultando"}
      </Container>
    </React.Fragment>
  );
}

export default App;
