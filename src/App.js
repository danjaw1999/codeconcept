import './App.css';
import headphones from "./assets/headphones.png";
import ximg from "./assets/x-img.png";
import edit from "./assets/edit-img.png";
import React, { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(11.90);
  const [shipping, setshipping] = useState(23.80);
  return (
    <div className="container">
      <div className="main-view">
        <div className="upper-view">
          <h1>Shopping Cart</h1>
          <button className="proceed-button">Proceed to checkout</button>
        </div>
        <div className="bottom-view">

          <div className="shopping-cart">
            <div className="table-view">
              <div className="specification">
                <div className="empty"></div>
                <ul>
                  <li>Product Name</li>
                  <li>Unit Price</li>
                  <li>Qty</li>
                </ul>
              </div>
              <hr />
              <div className="product">
                <div className="product-img">
                  <img className="pointer" src={ximg} alt="picture_x" />
                  <img src={headphones} className="headphones-photo" alt="picture_headphones_list" />
                </div>
                <div className="product-info">
                  <ul>
                    <li>Headphones</li>
                    <li>${value}</li>
                    <li>
                      <button className="incdec" onClick={() => setCount(count - 1)}>-</button>
                      <div>{count}</div>
                      <button className="incdec" onClick={() => setCount(count + 1)}>+</button>
                      <img src={edit} alt="edit_icon" className="pointer" />
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="lower-line" />
              <button className="update-button">Update Shopping Cart</button>
            </div>
          </div>
          <div className="basket-cart">

            <div className="order">
              <div className="mini-container-in-basket">
                <span>SHIPPING</span>
                <span className="price">${shipping}</span>
              </div>
            </div>
            <div className="cart-total">
              <div className="title">
                <p>CART TOTALS</p>
              </div>
              <div className="mini-container-in-basket">


                <div className="position-into-basket">
                  <span>Subtotal</span>
                  <span className="price">${(value * count)}</span>
                </div>
                <hr />
                <div className="resume-basket">
                  <span>Grand Total</span>
                  <span className="price">$</span>
                </div>
                <button>Proceed to checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
