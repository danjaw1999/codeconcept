import './App.css';
import headphones from "./assets/headphones.png";
import ximg from "./assets/x-img.png";
import edit from "./assets/edit-img.png";
import React, { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(11.90);
  const [shipping, setShipping] = useState(23.80);
  const [price, setPrice] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [product, setProduct] = useState(false);
  if (count < 0) {
    setCount(0)
  }
  const handleClickValue = () => {
    setPrice(value * count);
    setShipping(value * count > 100 ? 0 : 23.80)
  }
  const handleSend = () => {
    setSubmit(true);
  }
  const handleDelete = () => {
    setProduct(true);
    setValue(0);
    setPrice(0);
    setShipping(23.80);
  }
  return (
    <div className="container">
      <div className="main-view">
        <div className="upper-view">
          <h1>Shopping Cart</h1>
          <button className="proceed-button" onClick={handleSend}>Proceed to checkout</button>
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
              <div className="product" style={{ display: product ? "none" : "" }}>
                <div className="product-img">
                  <img className="pointer" src={ximg} alt="picture_x" onClick={handleDelete} />
                  <img src={headphones} className="headphones-photo" alt="picture_headphones_list" />
                </div>
                <div className="product-info">
                  <ul>
                    <li>Headphones</li>
                    <li>${value}</li>
                    <li>
                      <button className="incdec" onClick={() => setCount(count - 1)} >-</button>
                      <div>{count}</div>
                      <button className="incdec" onClick={() => setCount(count + 1)} >+</button>
                      <img src={edit} alt="edit_icon" className="pointer" onClick={handleClickValue} />
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="lower-line" />
              <button className="update-button" onClick={handleClickValue}>Update Shopping Cart</button>
            </div>
          </div>
          <h1 className="send-message" style={{ display: !submit ? "none" : "block" }}>Your order has been submitted successfully</h1>
          <div className="basket-cart" style={{ display: submit ? "none" : "block" }}>
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
                  <span className="price">${price.toFixed(2)}</span>
                </div>
                <hr />
                <div className="resume-basket">
                  <span>Grand Total</span>
                  <span className="price">${(price + shipping).toFixed(2)}</span>
                </div>
                <button onClick={handleSend}>Proceed to checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
