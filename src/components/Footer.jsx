import React from 'react';
import { Link } from 'react-router-dom'; // <-- ADD THIS IMPORT LINE

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>About KarmaKriti</h3>
          <p>KarmaKriti is dedicated to promoting handcrafted products from artisans across India, supporting sustainable livelihoods and preserving traditional crafts.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Shop</Link></li>
            <li><Link to="/stories">Stories</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="contact-info">
            <p><i className="fas fa-envelope"></i> info@karmakriti.com</p>
            <p><i className="fas fa-phone"></i> +91 9599198374</p>
          </div>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 KarmaKriti. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;