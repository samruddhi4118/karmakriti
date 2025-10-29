import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

function Navbar({ user }) {
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/KarmaKriti.png" alt="KarmaKriti Logo" />
          <span>KarmaKriti</span>
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/stories">Stories</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <div className="icons">
        {user ? (
          <div className="user-info">
            <span>Welcome, {user.displayName || user.email}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        ) : (
          <Link to="/login" className="login-icon"><i className="fas fa-user"></i></Link>
        )}
        <Link to="/wishlist" className="cart-icon-link">
          <i className="fas fa-heart"></i>
          {wishlistCount > 0 && <span className="notification-badge">{wishlistCount}</span>}
        </Link>
        <Link to="/cart" className="cart-icon-link">
          <i className="fas fa-shopping-cart"></i>
          {cartCount > 0 && <span className="notification-badge">{cartCount}</span>}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;