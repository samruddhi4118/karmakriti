import React from 'react';
import ProductCard from '../../components/ProductCard'; // Import the reusable card

function Candle() {
  const candleProducts = [
    { id: 1, imageUrl: '/Candle1.webp', title: "'Amber & Teal'", description: "Studio Pottery Candle Holder In Ceramic (Set of 2)", price: 169 },
    { id: 2, imageUrl: '/Candle2.webp', title: "'Rustic Mughal Door'", description: "Handcrafted Tea-Light Holder & Hanging Pillar Candle In Iron", price: 139 },
    { id: 3, imageUrl: '/Candle9.webp', title: "'Glowing Peacock'", description: "Handmade Brass Candle Holder In Dhokra Art", price: 199 },
    { id: 4, imageUrl: '/Candle3.webp', title: "'Rosette'", description: "Handmade Wax Jar Scented Candle", price: 189 },
    { id: 5, imageUrl: '/Candle4.webp', title: "'Cedarwood'", description: "Handmade Wax Jar Scented Candle", price: 189 },
    { id: 6, imageUrl: '/Candle5.webp', title: "'Lavender'", description: "Handmade Wax Jar Scented Candle", price: 189 },
    { id: 7, imageUrl: '/Candle6.webp', title: "'Lemongrass'", description: "Handmade Wax Jar Scented Candle", price: 189 },
    { id: 8, imageUrl: '/Candle7.webp', title: "'Ocean Breeze'", description: "Handmade Wax Jar Scented Candle", price: 189 },
    { id: 9, imageUrl: '/Candle8.webp', title: "'Lily'", description: "Handmade Wax Jar Scented Candle", price: 189 },
  ];

  return (
    <div className="product-page-container" style={{ paddingTop: '80px' }}>
      <header className="page-header">
        <h1>Candles</h1>
      </header>
      <main className="product-grid">
        {candleProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
}

export default Candle;