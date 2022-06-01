import { useEffect, useState } from "react";

const Counter2 = () => {
  let [contador1, setContador1] = useState(1);

  const incrementar1 = () => {
    setContador1(contador1 + 1);
  };

  useEffect(() => {
    console.log("Montaje de COUNTER");

    return () => {
      console.log("Se desmontÓ el COUNTER");
    };
  }, []);

  return (
    <div className="container my-5">
      <h2>Model N002</h2>
      <hr />
      <p onClick={incrementar1}>{contador1}</p>
      <hr />
    </div>
  );
};

export default Counter2;
