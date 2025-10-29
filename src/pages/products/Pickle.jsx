import React from 'react';
import ProductCard from '../../components/ProductCard';

function Pickle() {
  const products = [
    { id: 1, imageUrl: '/pickle1.jpg', title: "'Green Chilli Pickle'", description: "Hirvya Mirchi ch Lonche (325 g)", price: 325 },
    { id: 2, imageUrl: '/pickle2.jpg', title: "'Crushed Lemon Pickle'", description: "Limbu ch Lonche (325 g)", price: 299 },
    { id: 3, imageUrl: '/pickle3.jpg', title: "'North Indian Mango Pickle'", description: "Punjabi Ambya ch Lonche (325 g)", price: 299 },
    { id: 4, imageUrl: '/pickle4.jpg', title: "'Red Chilli Pickle'", description: "Lal Mirchi ch Lonche (325 g)", price: 299 },
    { id: 5, imageUrl: '/pickle5.jpg', title: "'Mango Pickle'", description: "Ambya ch Lonche (325 g)", price: 349 },
    { id: 6, imageUrl: '/pickle6.jpg', title: "'Amla Pickle'", description: "Avlya ch Lonche (325 g)", price: 299 },
  ];
  return (
    <div className="product-page-container" style={{ paddingTop: '80px' }}>
      <header className="page-header"><h1>Pickles</h1></header>
      <main className="product-grid">
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </main>
    </div>
  );
}
export default Pickle;