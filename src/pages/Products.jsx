// src/pages/Products.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Category data array
const categories = [
    { name: 'Chutneys', img: '/chutney1.jpg', link: '/products/chutney' },
    { name: 'Pickles', img: '/pickle1.jpg', link: '/products/pickle' },
    { name: 'Masala Powders', img: '/masala1.jpg', link: '/products/masala' },
    { name: 'Garden Decor', img: '/Garden1.webp', link: '/products/garden' },
    { name: 'Bathroom Essentials', img: '/Bath1.webp', link: '/products/bath' },
    { name: 'Candles', img: '/Candle9.webp', link: '/products/candles' },
    { name: 'Jewellery', img: '/Jewllery1.jpg', link: '/products/jewellery' },
    { name: 'Hanging Decor', img: '/Hang1.webp', link: '/products/hanging' },
    { name: 'Table Decor', img: '/Vase1.webp', link: '/products/table' },
    { name: 'Kitchen Storages', img: '/Storage1.webp', link: '/products/storage' },
    { name: 'Beverage Servings', img: '/CUP1.webp', link: '/products/cups' },
    { name: 'Wall Decor', img: '/Hanging1.webp', link: '/products/wall' },
];

function Products() {
  return (
    <div className="product-page-container" style={{ paddingTop: '80px' }}>
      <header className="page-header">
        <h1>Our Products</h1>
        <p>Explore our wide range of handcrafted items, sorted by category.</p>
      </header>

      <div className="product-category-grid">
        {categories.map((cat, index) => (
          <Link to={cat.link} className="category-card" key={index}>
            <img src={cat.img} alt={cat.name} />
            <div className="center-text">{cat.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;