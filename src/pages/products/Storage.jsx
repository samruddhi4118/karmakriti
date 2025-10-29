import React from 'react';
import ProductCard from '../../components/ProductCard';

function Storage() {
  const products = [
    { id: 1, imageUrl: '/Storage1.webp', title: "'Ceramic Jars'", description: "Set of 3 for spices and condiments", price: 699 },
    { id: 2, imageUrl: '/Storage5.jpg', title: "'Wooden Spice Box'", description: "Hand-carved with 9 compartments", price: 899 },
    { id: 3, imageUrl: '/Storage4.webp', title: "'Glass Canisters'", description: "Airtight seal for freshness (Set of 2)", price: 599 },
    { id: 4, imageUrl: '/Storage2.webp', title: "'Roti Box'", description: "Keeps rotis warm and fresh", price: 499 },
    { id: 5, imageUrl: '/Storage12.jpg', title: "'Pickle Jars'", description: "Traditional ceramic pickle containers", price: 399 },
    { id: 6, imageUrl: '/Storage3.webp', title: "'Cutlery Holder'", description: "Sheesham wood with brass inlay", price: 549 },
  ];
  return (
    <div className="product-page-container" style={{ paddingTop: '80px' }}>
      <header className="page-header"><h1>Kitchen Storages</h1></header>
      <main className="product-grid">
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </main>
    </div>
  );
}
export default Storage;