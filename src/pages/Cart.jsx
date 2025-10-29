import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // <-- IMPORT the useCart hook

function Cart() {
  const { cartItems } = useCart(); // <-- GET the cart items from context

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="page-container" style={{ paddingTop: '80px' }}>
      <header className="page-header">
        <h1>Your Shopping Cart</h1>
      </header>
      <main className="cart-container">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is currently empty.</p>
            <Link to="/products" className="submit-btn">Continue Shopping</Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items-list">
              {cartItems.map((item, index) => (
                <div className="cart-item" key={`${item.id}-${index}`}>
                  <img src={item.imageUrl} alt={item.title} className="cart-item-image" />
                  <div className="cart-item-details">
                    <p className="cart-item-title">{item.title}</p>
                    <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                  </div>
                  <p className="cart-item-price">Rs. {item.price * item.quantity}</p>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>Rs. {subtotal}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              <div className="summary-total">
                <span>Total</span>
                <span>Rs. {subtotal}</span>
              </div>
              <Link to="/checkout" className="submit-btn checkout-btn">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Cart;