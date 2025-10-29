import React from 'react';
import ProductCard from '../../components/ProductCard';

function Garden() {
  const gardenProducts = [
    { id: 1, imageUrl: '/Garden2.webp', title: "'Cheerful Sheep'", description: "Hand Painted Planter in Terracotta", price: 169 },
    { id: 2, imageUrl: '/Garden3.webp', title: "'Milky Cow'", description: "Hand Painted Planter in Terracotta", price: 169 },
    { id: 3, imageUrl: '/Garden8.webp', title: "'Enchanting Elephant'", description: "Hand Painted Planter in Terracotta", price: 169 },
    { id: 4, imageUrl: '/Garden1.webp', title: "'Mughal Roots'", description: "Hand Painted Planter in Ceramic", price: 169 },
    { id: 5, imageUrl: '/Garden4.webp', title: "'Plant On Wheels'", description: "Table Cum Floor Planter Pot", price: 169 },
    { id: 6, imageUrl: '/Garden5.webp', title: "'Blooming Birdies'", description: "Hand Painted Planter in Terracotta", price: 169 },
    { id: 7, imageUrl: '/Garden6.webp', title: "'The Morocco Pod'", description: "Hand Painted Planter in Ceramic", price: 169 },
    { id: 8, imageUrl: '/Garden7.webp', title: "'Smiling Giraffe'", description: "Hand Painted Planter in Ceramic", price: 169 },
    { id: 9, imageUrl: '/Garden9.webp', title: "'Abstract Faces'", description: "Hand Painted Planter in Terracotta", price: 169 },
    { id: 10, imageUrl: '/Garden11.webp', title: "'Carved Circle Glass Garden'", description: "Test Tube Table Planter/Vase", price: 199 },
    { id: 11, imageUrl: '/Garden12.webp', title: "'Modern Glass Garden'", description: "Test Tube Table Planter/Vase", price: 199 },
    { id: 12, imageUrl: '/Garden10.webp', title: "'Blooming Glass Trio Pillars'", description: "Test Tube Table Planter/Vase", price: 199 },
    { id: 13, imageUrl: '/Garden13.webp', title: "'Swinging Dog'", description: "Hand Painted Ceramic Hanging Planter Pot", price: 149 },
    { id: 14, imageUrl: '/Garden14.webp', title: "'The Bird'", description: "Decorative Garden & Balcony Hanging Planter", price: 149 },
    { id: 15, imageUrl: '/Garden15.webp', title: "'The Bee Collective'", description: "Hand Painted Ceramic Hanging Planter Pot", price: 149 },
  ];

  return (
    <div className="product-page-container" style={{ paddingTop: '80px' }}>
      <header className="page-header">
        <h1>Garden Decor</h1>
      </header>
      <main className="product-grid">
        {gardenProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
}

export default Garden;