import './App.css';
import headphones from "./assets/headphones.png";
import ximg from "./assets/x-img.png";
import edit from "./assets/edit-img.png";
function App() {
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
                  <img src={headphones} alt="picture_headphones_list" />
                </div>
                <div className="product-info">
                  <ul>
                    <li>Headphones</li>
                    <li>$11.90</li>
                    <li>
                      <button className="incdec">-</button>
                      <input type="text" defaultValue="2"></input>
                      <button className="incdec">+</button>
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
              <span>SHIPPING</span>
              <span className="price">$23.80</span>
            </div>
            <div className="cart-total">
              <div className="title">
                CART TOTALS
            </div>
              <div className="">
                <span>Subtotal</span>
                <span className="">$23.80</span>
              </div>
              <hr />
              <div className="">
                <span>Grand Total</span>
                <span className="">$23.80</span>
              </div>
              <button>Proceed to checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
