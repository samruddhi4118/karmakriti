import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const { cartItems, cartCount } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Basic validation
    for (const key in formData) {
      if (formData[key] === '') {
        alert('Please fill out all fields.');
        return;
      }
    }
    
    // In a real app, you would process the payment here.
    // For now, we'll just simulate a successful order.
    
    alert('Order placed successfully!');
    // Here you would clear the cart. We'll add this function later.
    // clearCart(); 
    navigate('/'); // Redirect to homepage
  };
  
  // If cart is empty, redirect away from checkout
  if (cartCount === 0) {
      return (
          <div className="empty-cart" style={{paddingTop: '100px'}}>
              <h2>Your cart is empty.</h2>
              <p>You cannot proceed to checkout without items in your cart.</p>
          </div>
      )
  }

  return (
    <div className="page-container" style={{ paddingTop: '80px' }}>
      <header className="page-header">
        <h1>Checkout</h1>
      </header>
      
      <main className="checkout-container">
        <form className="checkout-form" onSubmit={handlePlaceOrder}>
          <div className="form-section">
            <h2>Shipping Information</h2>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="zip">ZIP Code</label>
                <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleChange} required />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Payment Details</h2>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date (MM/YY)</label>
                <input type="text" id="expiryDate" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} required />
              </div>
            </div>
          </div>
          <button type="submit" className="submit-btn place-order-btn">Place Order</button>
        </form>

        <div className="order-summary-container">
            <div className="cart-summary">
              <h2>Order Summary</h2>
              {cartItems.map((item, index) => (
                <div className="summary-row" key={`${item.id}-${index}`}>
                    <span>{item.title} x {item.quantity}</span>
                    <span>Rs. {item.price * item.quantity}</span>
                </div>
              ))}
              <div className="summary-total">
                <span>Total</span>
                <span>Rs. {subtotal}</span>
              </div>
            </div>
        </div>
      </main>
    </div>
  );
}

export default Checkout;