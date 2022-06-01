import { useEffect, useState } from "react";

const Counter = () => {
  const [contador, setContador] = useState(0);

  const incrementar1 = () => {
    setContador(contador + 1);
  };

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div className="container my-5">
      <h2>Model N001</h2>
      <hr />
      <button className="btn btn-secondary" onClick={incrementar}>
        +
      </button>
      <hr />
      <h4>{contador}</h4>
    </div>
  );
};

export default Counter;
