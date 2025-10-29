import React from 'react';
import ProductCard from '../../components/ProductCard';

function Masala() {
  const products = [
    { id: 1, imageUrl: '/masala1.jpg', title: "'Thandai Powder'", description: "Instant Mix & Ready To Drink (200 g)", price: 129 },
    { id: 2, imageUrl: '/masala2.jpg', title: "'Chaat Masala'", description: "Tangy, zesty flavours (200 g)", price: 129 },
    { id: 3, imageUrl: '/masala3.jpg', title: "'Chana Masala Powder'", description: "Instant Desi Punjabi Tadka (200 g)", price: 129 },
    { id: 4, imageUrl: '/masala4.jpg', title: "'Kadai Masala'", description: "For that Instant Aroma (200 g)", price: 129 },
    { id: 5, imageUrl: '/masala5.jpg', title: "'Tikka Masala Spice Mix'", description: "Finger Licking Taste (200 g)", price: 129 },
    { id: 6, imageUrl: '/masala6.jpg', title: "'Assal Maharashtrian Goda Masala'", description: "Authentic Maharashtrian Thaska (200 g)", price: 149 },
  ];
  return (
    <div className="product-page-container" style={{ paddingTop: '80px' }}>
      <header className="page-header"><h1>Masala Powders</h1></header>
      <main className="product-grid">
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </main>
    </div>
  );
}
export default Masala;