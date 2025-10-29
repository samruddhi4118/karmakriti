// src/pages/HomePage.jsx
import React from 'react';
import Slideshow from '../components/Slideshow';
import About from '../components/About';
import ShopByCategory from '../components/ShopByCategory';
import OurBusiness from '../components/OurBusiness';

function HomePage() {
  return (
    <>
      <Slideshow />
      <About />
      <ShopByCategory />
      <br /><br />
      <OurBusiness />
    </>
  );
}

export default HomePage;