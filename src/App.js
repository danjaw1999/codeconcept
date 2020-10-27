import './App.css';

function App() {
  return (
    <div className="container">
      <div className="main-view">
        <div className="shopping-cart">
          <h1>Shopping Cart</h1>
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
              <div className="product-img"></div>
              <div className="product-info">
                <ul>
                  <li>Headphones</li>
                  <li>$11.90</li>
                  <li>
                    <div>-</div>
                    <div>2</div>
                    <div>+</div>
                    <div>olowek</div>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <button>Update Shopping Cart</button>
          </div>
        </div>
        <div className="basket-cart">
          <button>Proceed to checkout</button>
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
  );
}

export default App;
