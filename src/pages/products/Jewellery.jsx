import React from 'react';
import ProductCard from '../../components/ProductCard';

function Jewellery() {
  const products = [
    { id: 1, imageUrl: '/Jewllery14.webp', title: "'Ethnic Jhumkas'", description: "Handcrafted terracotta earrings", price: 699 },
    { id: 2, imageUrl: '/Jewllery1.jpg', title: "'Peacock Necklace'", description: "Oxidized silver with intricate details", price: 899 },
    { id: 3, imageUrl: '/Jewllery17.webp', title: "'Floral Hoops'", description: "Meenakari art on brass", price: 499 },
    { id: 4, imageUrl: '/Jewllery4.webp', title: "'Tribal Choker'", description: "Beaded necklace with antique finish", price: 799 },
    { id: 5, imageUrl: '/Jewllery6.webp', title: "'Ganesha Pendant'", description: "Hand-painted wooden pendant", price: 399 },
    { id: 6, imageUrl: '/Jewllery5.webp', title: "'Pearl Drop Earrings'", description: "Elegant pearls for a classic look", price: 599 },
  ];
  return (
    <div className="product-page-container" style={{ paddingTop: '80px' }}>
      <header className="page-header"><h1>Jewellery</h1></header>
      <main className="product-grid">
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </main>
    </div>
  );
}
export default Jewellery;