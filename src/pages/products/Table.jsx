import React from 'react';
import ProductCard from '../../components/ProductCard';

function Table() {
  const products = [
    { id: 1, imageUrl: '/Vase1.webp', title: "'Blue Pottery Vase'", description: "Jaipuri blue pottery, hand-painted", price: 699 },
    { id: 2, imageUrl: '/Vase3.webp', title: "'Terracotta Planter'", description: "With Warli art motifs", price: 499 },
    { id: 3, imageUrl: '/Vase2.webp', title: "'Wooden Coasters'", description: "Set of 4, with stand", price: 399 },
    { id: 4, imageUrl: '/Vase4.webp', title: "'Brass Diya'", description: "Antique finish for festive decor", price: 599 },
    { id: 5, imageUrl: '/Vase6.webp', title: "'Table Runner'", description: "Hand-block printed cotton", price: 799 },
    { id: 6, imageUrl: '/Vase5.webp', title: "'Candle Stand'", description: "Dhokra art brass candle stand", price: 649 },
  ];
  return (
    <div className="product-page-container" style={{ paddingTop: '80px' }}>
      <header className="page-header"><h1>Table Decor</h1></header>
      <main className="product-grid">
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </main>
    </div>
  );
}
export default Table;