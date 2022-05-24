import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import { BsCartFill } from "react-icons/bs";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Somos Animal</h3>
      <nav ref={navRef}>
        <a href="#">Home</a>
        <a href="#">Tienda</a>
        <a href="#">Venta mayorista</a>
        <a href="#">Carrito</a>
        <BsCartFill />
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
