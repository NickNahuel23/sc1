import { useEffect, useState } from "react";

export const ItemListContainer = () => {
  const [contador, setContador] = useState(0);
  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    if (contador > 0) setContador(contador - 1);
  };

  return (
    <div className="">
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-success" onClick={incrementar}>
          +
        </button>
        <button type="button" className="btn btn-danger" onClick={decrementar}>
          -
        </button>
      </div>
      <h4>{contador}</h4>
    </div>
  );
};

export default ItemListContainer;
