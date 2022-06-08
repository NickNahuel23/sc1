import React from "react";
import HeaderH from "../../images/header.jpg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <Link to="/"></Link>
      <Link to="/Products"></Link>
      <img className="imgHeader" src={HeaderH} alt="home" />
    </div>
  );
};

export default Home;
