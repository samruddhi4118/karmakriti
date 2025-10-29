import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard'; // We'll reuse our ProductCard

function Wishlist() {
  const { wishlistItems } = useWishlist();

  return (
    <div className="page-container" style={{ paddingTop: '80px' }}>
      <header className="page-header">
        <h1>Your Wishlist</h1>
      </header>
      <main className="wishlist-container">
        {wishlistItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your wishlist is empty.</p>
            <Link to="/products" className="submit-btn">Explore Products</Link>
          </div>
        ) : (
          <div className="product-grid">
            {wishlistItems.map(item => (
              <ProductCard key={`${item.id}-${item.title}`} product={item} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Wishlist;