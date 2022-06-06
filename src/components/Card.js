import React from "react";
import BasicButtons from "./Button/Button";
import "./Card.css";
import { ItemListContainer } from "./ItemListContainer/ItemListContainer";

export const Card = ({ title, imageUrl, body }) => {
  return (
    <div className="card-container">
      <div></div>
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
        <div className="btn">
          <ItemListContainer />
          <BasicButtons />
        </div>
      </div>
    </div>
  );
};
