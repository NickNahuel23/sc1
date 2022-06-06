import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { pedirDatos } from "../../mock/pedirDatos";
import ItemList from "../itemList/ItemList";

export const ItemListContainer = () => {
  //const [items, setItems] = useState([]);
  //const [loading, setLoading] = useState(true);

  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    if (contador > 0) setContador(contador - 1);
  };

  return (
    <div className="container my-5">
      <h2>Boton</h2>
      <hr />
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-danger" onClick={incrementar}>
          +
        </button>

        <button type="button" className="btn btn-dark" onClick={decrementar}>
          -
        </button>
      </div>

      <hr />

      <h4>{contador}</h4>
    </div>
  );
};

// const promesa = new Promise((resolve, reject) => {
// resolve("Promesa resuelta");
//reject("Promesa rechazada");
// });

// me trae el resolve de la promesa
// promesa.then((data) => {
// console.log(data);
// });

// console.log(promesa);

//
// promesa.catch((error) => {
// console.log(error);
//});

//promesa.then((resp) => {
//  console.log(resp)
//})
//.catch((error) => {
//  console.log("ERROR:", error)
//})

//const [algo, setAlgo] = useState(true);

//const handleAlgo = () => {
//setAlgo(!algo);
//};

//useEffect(() => {
//setLoading(true);
//pedirDatos()
//.then((resp) => {
//setItems(resp);
// })
//.catch((error) => {
//console.log("ERROR:", error);
//})
//.finally(() => {
//setLoading(false);
//});
// }, []);

//return (
//<section className="container my-5">
//{loading ? (
//<Spinner animation="border" role="status">
//<span className="visually-hidden">Loading...</span>
//</Spinner>
//) : (
//<ItemList items={items} />
//)}
//</section>
//);
