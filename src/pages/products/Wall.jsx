import React from 'react';
import ProductCard from '../../components/ProductCard';

function Wall() {
  const products = [
    { id: 1, imageUrl: '/Hanging2.webp', title: "'Madhubani Painting'", description: "Traditional art on handmade paper", price: 699 },
    { id: 2, imageUrl: '/Hanging4.webp', title: "'Wooden Wall Shelf'", description: "With hand-carved details", price: 899 },
    { id: 3, imageUrl: '/Hanging3.webp', title: "'Metal Wall Art'", description: "Tree of life design", price: 999 },
    { id: 4, imageUrl: '/Hanging5.webp', title: "'Dream Catcher'", description: "Handwoven with natural feathers", price: 499 },
    { id: 5, imageUrl: '/Hanging9.webp', title: "'Bell Hanging'", description: "Brass bells with colourful beads", price: 599 },
    { id: 6, imageUrl: '/Hanging8.webp', title: "'Key Holder'", description: "Warli art on wooden key holder", price: 399 },
  ];
  return (
    <div className="product-page-container" style={{ paddingTop: '80px' }}>
      <header className="page-header"><h1>Wall Decor</h1></header>
      <main className="product-grid">
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </main>
    </div>
  );
}
export default Wall;