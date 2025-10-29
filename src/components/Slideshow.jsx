import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // <-- ADD THIS IMPORT LINE

// We'll store slide data in an array of objects. This is cleaner.
const slidesData = [
  {
    image: '/slide4.webp',
    alt: 'Slide 1',
    title: 'Our Pride',
    text: 'Explore Unique Creations from 120+ Artisans Across Different States.'
  },
  {
    image: '/slide3.webp',
    alt: 'Slide 2',
    title: 'Table Planters',
    text: 'Explore Our Hand-Painted Terracotta Planters, Perfect for Every Garden.'
  },
  {
    image: '/slide2.webp',
    alt: 'Slide 3',
    title: 'SPICE BOXES',
    text: 'Discover Our Exquisite Handmade Boxes in Wood and Bras.'
  },
  {
    image: '/slide1.webp',
    alt: 'Slide 4',
    title: 'Pickle Holders',
    text: 'Discover Hand-Painted Ceramic Pickle Holders, Perfectly Crafted with Love.'
  }
];

function Slideshow() {
  // 'useState' hook to keep track of which slide is active.
  const [currentSlide, setCurrentSlide] = useState(0);

  // 'useEffect' hook to run code on component mount.
  useEffect(() => {
    // Set an interval to change the slide every 5 seconds.
    const timer = setInterval(() => {
      // Move to the next slide. The % operator loops back to 0.
      setCurrentSlide(prevSlide => (prevSlide + 1) % slidesData.length);
    }, 5000); // 5000 milliseconds = 5 seconds

    // Cleanup function to prevent memory leaks.
    return () => clearInterval(timer);
  }, []); // The empty array [] means this effect runs only once.

  return (
    <div className="slideshow-container1">
      {slidesData.map((slide, index) => (
        <div
          key={index}
          // Conditionally show the slide based on the 'currentSlide' state.
          className={index === currentSlide ? 'slide fade active' : 'slide fade'}
        >
          <div className="image-container1">
            <img src={slide.image} alt={slide.alt} />
          </div>
          <div className="text-container1">
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
            {/* This Link will now work correctly */}
            <Link to="/products" className="shop-btn">SHOP NOW</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Slideshow;