import React from 'react';
import ProductCard from '../../components/ProductCard';

function Chutney() {
  const chutneyProducts = [
    { id: 1, imageUrl: '/chutney1.jpg', title: "'Tamarind Sauce'", description: "Chincha chi chutney (325 g)", price: 299 },
    { id: 2, imageUrl: '/chutney2.jpg', title: "'Mango Chutney'", description: "Gul Amba (325 g)", price: 299 },
    { id: 3, imageUrl: '/chutney3.jpg', title: "'Crushed Lemon Pickle'", description: "Limbu chi chutney (325 g)", price: 299 },
    { id: 4, imageUrl: '/chutney4.jpg', title: "'Garcinia Indica Sauce'", description: "Kokam Chutney", price: 299 },
    { id: 5, imageUrl: '/chutney5.jpg', title: "'Amala Chutney'", description: "Avalya chi chutney (325 g)", price: 299 },
    { id: 6, imageUrl: '/chutney6.jpg', title: "'Chutneys Trial Pack'", description: "Pack of 4 flavours (75 g each)", price: 299 },
  ];

  return (
    <div className="product-page-container" style={{ paddingTop: '80px' }}>
      <header className="page-header">
        <h1>Chutneys</h1>
      </header>
      <main className="product-grid">
        {chutneyProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
}

export default Chutney;