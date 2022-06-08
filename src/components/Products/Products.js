import React from "react";
import IMG1 from "../../images/01.jpg";
import IMG2 from "../../images/04.jpg";
import IMG3 from "../../images/05.jpg";
import IMG4 from "../../images/06.jpg";
import IMG5 from "../../images/12.jpg";
import IMG6 from "../../images/18.jpg";
import IMG7 from "../../images/21.jpg";
import IMG8 from "../../images/23.jpg";
import IMG9 from "../../images/31.jpg";
import IMG10 from "../../images/67.jpg";

export const Products = () => {
  return (
    <>
      <h1 className="title">PRODUCTS</h1>
      <div className="products">
        <div className="product">
          <a href="#">
            <div className="product__img">
              <img src={IMG1} alt="" />
            </div>
          </a>
          <div className="product__footer">
            <h1>Animal 1</h1>
            <p>Model 2022</p>
            <p className="price">$7000</p>
          </div>
          <div>
            <a href="#" className="btn">
              Vist
            </a>
          </div>
          <div className="buttom">
            <button className="btn">Add to cart</button>
          </div>
        </div>
        <div className="product">
          <a href="#">
            <div className="product__img">
              <img src={IMG2} alt="" />
            </div>
          </a>
          <div className="product__footer">
            <h1>Animal 2</h1>
            <p> Model 2022</p>
            <p className="price">$8000</p>
          </div>
          <div>
            <a href="#" className="btn">
              Vist
            </a>
          </div>
          <div className="buttom">
            <button className="btn">Add to cart</button>
          </div>
        </div>
        <div className="product">
          <a href="#">
            <div className="product__img">
              <img src={IMG3} alt="" />
            </div>
          </a>
          <div className="product__footer">
            <h1>Animal 3</h1>
            <p>Model 2022</p>
            <p className="price">$7500</p>
          </div>
          <div>
            <a href="#" className="btn">
              Vist
            </a>
          </div>
          <div className="buttom">
            <button className="btn">Add to cart</button>
          </div>
        </div>
        <div className="product">
          <a href="#">
            <div className="product__img">
              <img src={IMG4} alt="" />
            </div>
          </a>
          <div className="product__footer">
            <h1>Animal 4</h1>
            <p>Model 2022</p>
            <p className="price">$7500</p>
          </div>
          <div>
            <a href="#" className="btn">
              Vist
            </a>
          </div>
          <div className="buttom">
            <button className="btn">Add to cart</button>
          </div>
        </div>
        <div className="product">
          <a href="#">
            <div className="product__img">
              <img src={IMG5} alt="" />
            </div>
          </a>
          <div className="product__footer">
            <h1>Animal 5</h1>
            <p>Model 2022</p>
            <p className="price">$7500</p>
          </div>
          <div>
            <a href="#" className="btn">
              Vist
            </a>
          </div>
          <div className="buttom">
            <button className="btn">Add to cart</button>
          </div>
        </div>
        <div className="product">
          <a href="#">
            <div className="product__img">
              <img src={IMG6} alt="" />
            </div>
          </a>
          <div className="product__footer">
            <h1>Animal 6</h1>
            <p>Model 2022</p>
            <p className="price">$7500</p>
          </div>
          <div>
            <a href="#" className="btn">
              Vist
            </a>
          </div>
          <div className="buttom">
            <button className="btn">Add to cart</button>
          </div>
        </div>
        <div className="product">
          <a href="#">
            <div className="product__img">
              <img src={IMG7} alt="" />
            </div>
          </a>
          <div className="product__footer">
            <h1>Animal 7</h1>
            <p>Model 2022</p>
            <p className="price">$7500</p>
          </div>
          <div>
            <a href="#" className="btn">
              Vist
            </a>
          </div>
          <div className="buttom">
            <button className="btn">Add to cart</button>
          </div>
        </div>
        <div className="product">
          <a href="#">
            <div className="product__img">
              <img src={IMG8} alt="" />
            </div>
          </a>
          <div className="product__footer">
            <h1>Animal 8</h1>
            <p>Model 2022</p>
            <p className="price">$7500</p>
          </div>
          <div>
            <a href="#" className="btn">
              Vist
            </a>
          </div>
          <div className="buttom">
            <button className="btn">Add to cart</button>
          </div>
        </div>{" "}
        <div className="product">
          <a href="#">
            <div className="product__img">
              <img src={IMG9} alt="" />
            </div>
          </a>
          <div className="product__footer">
            <h1>Animal 9</h1>
            <p>Model 2022</p>
            <p className="price">$7500</p>
          </div>
          <div>
            <a href="#" className="btn">
              Vist
            </a>
          </div>
          <div className="buttom">
            <button className="btn">Add to cart</button>
          </div>
        </div>{" "}
        <div className="product">
          <a href="#">
            <div className="product__img">
              <img src={IMG10} alt="" />
            </div>
          </a>
          <div className="product__footer">
            <h1>Animal 10</h1>
            <p>Model 2022</p>
            <p className="price">$7500</p>
          </div>
          <div>
            <a href="#" className="btn">
              Vist
            </a>
          </div>
          <div className="buttom">
            <button className="btn">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};
