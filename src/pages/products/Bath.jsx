import React from 'react';
import ProductCard from '../../components/ProductCard'; // Import the reusable card

function Bath() {
  const bathProducts = [
    { id: 1, imageUrl: '/Bath1.webp', title: "'The Hunt Essentials'", description: "Hand Painted Ceramic Bathroom Accessory (Set of 3)", price: 699 },
    { id: 2, imageUrl: '/Bath2.webp', title: "'Moroccan Essentials'", description: "Hand Painted Ceramic Bathroom Accessory (Set of 3)", price: 699 },
    { id: 3, imageUrl: '/bath4.webp', title: "'Moroccan Floral'", description: "Hand Painted Ceramic Bathroom Accessory (Set of 3)", price: 699 },
    { id: 4, imageUrl: '/Bath5.webp', title: "'Imprinted Leaves Yellow'", description: "Hand Painted Ceramic Bathroom Accessory (Set of 3)", price: 699 },
    { id: 5, imageUrl: '/Bath6.webp', title: "'Imprinted Leaves Brown'", description: "Hand Painted Ceramic Bathroom Accessory (Set of 3)", price: 699 },
    { id: 6, imageUrl: '/Bath7.webp', title: "'Brass-y On Wood'", description: "Warli Hand-Painted Dhokra Towel Holder", price: 149 },
    { id: 7, imageUrl: '/Bath8.webp', title: "'The Dancing Peacock'", description: "Hand Carved Towel Ring Holder", price: 149 },
    { id: 8, imageUrl: '/Bath9.webp', title: "'Floral Block'", description: "Hand Carved Towel Ring Holder", price: 149 },
    { id: 9, imageUrl: '/Bath10.webp', title: "'Pleasant Paisley'", description: "Hand Carved Block Wall Hook & Towel Holder", price: 149 },
    { id: 10, imageUrl: '/Bath11.webp', title: "'Alluring Owl'", description: "Hand Carved Block Wall Hook & Towel Holder", price: 149 },
    { id: 11, imageUrl: '/Bath12.webp', title: "'The Sqaure'", description: "Warli Hand Painted Towel Holder & Mirror", price: 149 },
  ];

  return (
    <div className="product-page-container" style={{ paddingTop: '80px' }}>
      <header className="page-header">
        <h1>Bathroom Essentials</h1>
      </header>
      <main className="product-grid">
        {bathProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
}

export default Bath;