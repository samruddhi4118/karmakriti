import React from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleWishlistItem, isInWishlist } = useWishlist();

  const handleAddToCart = () => {
    addToCart(product);
  };
  
  const handleToggleWishlist = () => {
    toggleWishlistItem(product);
  };
  
  const isProductInWishlist = isInWishlist(product.id, product.title);

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.title} />
      <p className="product-title">{product.title}</p>
      <p className="product-description">{product.description}</p>
      <h3 className="product-price">Rs. {product.price}</h3>
      <div className="product-actions">
        <i
          className={`fas fa-heart wishlist-icon ${isProductInWishlist ? 'active' : ''}`}
          onClick={handleToggleWishlist}
        ></i>
        <button className="cart-btn" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;