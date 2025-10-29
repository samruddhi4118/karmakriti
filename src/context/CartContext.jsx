import React, { createContext, useState, useContext } from 'react';

// 1. Create the context
const CartContext = createContext();

// 2. Create a custom hook for easy access to the context
export function useCart() {
  return useContext(CartContext);
}

// 3. Create the Provider component that will wrap your app
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      // Check if the product is already in the cart
      const existingItem = prevItems.find(item => item.id === product.id && item.title === product.title);
      if (existingItem) {
        // If it exists, just increase the quantity
        return prevItems.map(item =>
          item.id === product.id && item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Otherwise, add the new product with a quantity of 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    alert(`${product.title} has been added to your cart!`);
  };

  // You can add more functions here later (e.g., removeFromCart, clearCart)

  const value = {
    cartItems,
    addToCart,
    // The total number of items in the cart
    cartCount: cartItems.reduce((count, item) => count + item.quantity, 0),
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}