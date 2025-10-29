import React from 'react';
import ProductCard from '../../components/ProductCard';

function Cups() {
  const cupProducts = [
    { id: 1, imageUrl: '/CUP1.webp', title: "'The Hunt Essentials'", description: "Hand Painted Ceramic Bathroom Accessory (Set of 3)", price: 699 },
    { id: 2, imageUrl: '/CUP2.webp', title: "'Moroccan Essentials'", description: "Hand Painted Ceramic Bathroom Accessory (Set of 3)", price: 699 },
    { id: 3, imageUrl: '/CUP3.webp', title: "'Moroccan Floral'", description: "Hand Painted Ceramic Bathroom Accessory (Set of 3)", price: 699 },
    { id: 4, imageUrl: '/CUP8.webp', title: "'Imprinted Leaves Yellow'", description: "Hand Painted Ceramic Bathroom Accessory (Set of 3)", price: 699 },
    { id: 5, imageUrl: '/CUP4.webp', title: "'Imprinted Leaves Brown'", description: "Hand Painted Ceramic Bathroom Accessory (Set of 3)", price: 699 },
    { id: 6, imageUrl: '/CUP11.webp', title: "'Brass-y On Wood'", description: "Warli Hand-Painted Dhokra Towel Holder", price: 149 },
    { id: 7, imageUrl: '/CUP5.webp', title: "'The Dancing Peacock'", description: "Hand Carved Towel Ring Holder", price: 149 },
    { id: 8, imageUrl: '/CUP6.webp', title: "'Floral Block'", description: "Hand Carved Towel Ring Holder", price: 149 },
    { id: 9, imageUrl: '/CUP15.webp', title: "'Pleasant Paisley'", description: "Hand Carved Block Wall Hook & Towel Holder", price: 149 },
    { id: 10, imageUrl: '/CUP7.webp', title: "'Alluring Owl'", description: "Hand Carved Block Wall Hook & Towel Holder", price: 149 },
    { id: 11, imageUrl: '/CUP9.webp', title: "'The Square'", description: "Warli Hand Painted Towel Holder & Mirror", price: 149 },
    { id: 12, imageUrl: '/CUP10.webp', title: "'The Square'", description: "Warli Hand Painted Towel Holder & Mirror", price: 149 },
    { id: 13, imageUrl: '/CUP13.webp', title: "'Alluring Owl'", description: "Hand Carved Block Wall Hook & Towel Holder", price: 149 },
    { id: 14, imageUrl: '/CUP12.webp', title: "'The Square'", description: "Warli Hand Painted Towel Holder & Mirror", price: 149 },
    { id: 15, imageUrl: '/CUP14.webp', title: "'The Square'", description: "Warli Hand Painted Towel Holder & Mirror", price: 149 },
  ];

  return (
    <div className="product-page-container" style={{ paddingTop: '80px' }}>
      <header className="page-header">
        <h1>Beverage Servings</h1>
      </header>
      <main className="product-grid">
        {cupProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
}

export default Cups;