import { useEffect, useState } from "react";

const Counter2 = () => {
  const [contador, setContador] = useState(1);

  const incrementar = () => {
    setContador(contador + 1);
  };

  // montaje + actualizacion
  useEffect(() => {
    console.log("Componente montado");
  });

  // solo en montaje
  useEffect(() => {
    console.log("Componente montado");
  }, []);

  // de desmontaje
  useEffect(() => {
    console.log("Contador actualizado");
  }, [contador]);

  return (
    <div className="container my-5">
      <h2>Counter</h2>
      <hr />
      <button className="btn btn-primary" onClick={incrementar}>
        Click me
      </button>
      <hr />
      <h4>{contador}</h4>
      <p>FyH del ultimo click: {new Date().toLocaleString()}</p>
    </div>
  );
};

export default Counter2;
