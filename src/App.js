import Counter from "./components/Container/Counter/Counter";
import Counter2 from "./components/Container/Counter/Counter2";
import Header from "./components/Header/Header";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import ProductContainer from "./components/Products/img/ProductContainer";
import GridMUI from "./components/Products/playground/GridMUI";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <ProductContainer />
      <Counter />
      <Counter2 />
      <ItemListContainer />
      <GridMUI />
    </>
  );
}

export default App;
