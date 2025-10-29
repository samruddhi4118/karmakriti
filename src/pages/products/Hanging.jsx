import React from 'react';
import ProductCard from '../../components/ProductCard';

function Hanging() {
  const hangingProducts = [
    { id: 1, imageUrl: '/Hang1.webp', title: "'The Hunt Essentials'", description: "Hand Painted Ceramic Bathroom Accessory (Set of 3)", price: 699 },
    { id: 2, imageUrl: '/Hang2.webp', title: "'Moroccan Essentials'", description: "Hand Painted Ceramic Bathroom Accessory (Set of 3)", price: 699 },
    { id: 3, imageUrl: '/Hang3.webp', title: "'Moroccan Floral'", description: "Hand Painted Ceramic Bathroom Accessory (Set of 3)", price: 699 },
    { id: 4, imageUrl: '/Hang4.webp', title: "'Imprinted Leaves Yellow'", description: "Hand Painted Ceramic Bathroom Accessory (Set of 3)", price: 699 },
    { id: 5, imageUrl: '/Hang5.webp', title: "'Imprinted Leaves Brown'", description: "Hand Painted Ceramic Bathroom Accessory (Set of 3)", price: 699 },
    { id: 6, imageUrl: '/Hang6.webp', title: "'Brass-y On Wood'", description: "Warli Hand-Painted Dhokra Towel Holder", price: 149 },
  ];

  return (
    <div className="product-page-container" style={{ paddingTop: '80px' }}>
      <header className="page-header">
        <h1>Hanging Decor</h1>
      </header>
      <main className="product-grid">
        {hangingProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
}

export default Hanging;