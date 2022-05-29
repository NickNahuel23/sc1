import React from "react";
import IMG_01 from "../Assets/IMG_01.jpg";

function Card() {
  return (
    <div className="card">
      <img src={IMG_01} alt="" />
      <div className="card-body">
        <h4 className="card-title">My title</h4>
        <p className="card-text text-secondary">la la la la la</p>
      </div>
    </div>
  );
}

export default Card;
