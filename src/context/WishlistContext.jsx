import React, { createContext, useState, useContext } from 'react';

const WishlistContext = createContext();

export function useWishlist() {
  return useContext(WishlistContext);
}

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);

  const toggleWishlistItem = (product) => {
    setWishlistItems(prevItems => {
      const isAlreadyInWishlist = prevItems.some(item => item.id === product.id && item.title === product.title);
      
      if (isAlreadyInWishlist) {
        alert(`${product.title} removed from wishlist.`);
        return prevItems.filter(item => !(item.id === product.id && item.title === product.title));
      } else {
        alert(`${product.title} added to wishlist!`);
        return [...prevItems, product];
      }
    });
  };

  const isInWishlist = (productId, productTitle) => {
      return wishlistItems.some(item => item.id === productId && item.title === productTitle);
  };

  const value = {
    wishlistItems,
    toggleWishlistItem,
    isInWishlist,
    wishlistCount: wishlistItems.length,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}