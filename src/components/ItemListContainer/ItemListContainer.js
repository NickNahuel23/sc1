import { Button } from "react-bootstrap";
import { BsCartFill } from "react-icons/bs";
export const ItemListContainer = () => {
  return (
    <section className="container my-5">
      <h2>Nuestros productos</h2>
      <hr />
      <Button variant="dark">Dark</Button>
      <BsCartFill />
    </section>
  );
};
