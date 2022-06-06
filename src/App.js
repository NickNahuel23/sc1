import Header from "./components/Header/Header";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import ProductContainer from "./components/Products/img/ProductContainer";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <ProductContainer />
      <h2 className="title-Products">Temporada 2022</h2>

      <div className="divProducts">
        <Card
          title="Animal 01"
          imageUrl="https://github.com/sofiacartacci/sc/blob/main/public/Assets/04.jpg?raw=true"
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 15000.  "
        />
        {""}
        <hr />
        <Card
          title="Animal 02"
          imageUrl="https://github.com/sofiacartacci/sc/blob/main/public/Assets/02.jpg?raw=true"
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 15000. "
        />
        <hr />
        <Card
          title="Animal 03"
          imageUrl="https://github.com/sofiacartacci/sc/blob/main/public/Assets/06.jpg?raw=true"
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 15000."
        />
        <hr />
        <Card
          title="Animal 04"
          imageUrl="https://github.com/sofiacartacci/sc/blob/main/public/Assets/11.jpg?raw=true"
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 15000."
        />
        <hr />
        <Card
          title="Animal 05"
          imageUrl="https://github.com/sofiacartacci/sc/blob/main/public/Assets/16.jpg?raw=true"
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 15000."
        />
        <hr />
        <Card
          title="Animal 06"
          imageUrl="https://github.com/sofiacartacci/sc/blob/main/public/Assets/19.jpg?raw=true"
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 15000. "
        />
        <hr />
        <Card
          title="Animal 07"
          imageUrl="https://github.com/sofiacartacci/sc/blob/main/public/Assets/22.jpg?raw=true"
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 15000."
        />
        <hr />
        <Card
          title="Animal 08"
          imageUrl="https://github.com/sofiacartacci/sc/blob/main/public/Assets/26.jpg?raw=true"
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 15000."
        />
        <hr />
        <Card
          title="Animal 09"
          imageUrl="https://github.com/sofiacartacci/sc/blob/main/public/Assets/28.jpg?raw=true"
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 15000."
        />
        <hr />
        <Card
          title="Animal 10"
          imageUrl="https://github.com/sofiacartacci/sc/blob/main/public/Assets/31.jpg?raw=true"
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 15000."
        />
        <hr />
        <Card
          title="Animal 11"
          imageUrl="https://github.com/sofiacartacci/sc/blob/main/public/Assets/37.jpg?raw=true"
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 15000."
        />
        <hr />
        <Card
          title="Animal 12"
          imageUrl="https://github.com/sofiacartacci/sc/blob/main/public/Assets/43.jpg?raw=true"
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 15000."
        />
        <hr />
      </div>
    </>
  );
}

export default App;
