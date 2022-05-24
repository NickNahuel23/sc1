import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import Container from "./components/Container/Container";
import HeroSlider from "./components/HeroSlider";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <ItemListContainer />
      </Container>
      <Container>
        <hr></hr>
        <HeroSlider></HeroSlider>
        <hr></hr>
      </Container>
    </React.Fragment>
  );
}

export default App;
