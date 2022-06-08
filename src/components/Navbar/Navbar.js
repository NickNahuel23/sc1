import React from "react";
import Logo from "../../images/logoA.jpg";

export const NavBar = () => {
  return (
    <div>
      <header>
        <a href="/">
          <div className="logo">
            <img src={Logo} alt="logo" width="45" />
          </div>
        </a>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Products">Products</a>
          </li>
        </ul>
        <div className="cart">
          <box-icon name="cart"></box-icon>
          <span className="item__total">0</span>
        </div>
      </header>
    </div>
  );
};
