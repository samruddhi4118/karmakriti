// src/components/ShopByCategory.jsx
import React from 'react';

function ShopByCategory() {
  return (
    <>
      <center><h1 style={{ paddingTop: '30px' }}>SHOP BY CATEGORY</h1></center><br />
      <div className="row">
        <div className="column">
          <a href="Pickle.html">
            <img src="/pickle1.jpg" alt="artisans" />
            <div className="center-text">Pickles</div>
          </a>
        </div>
        <div className="column">
          <a href="masala.html">
            <img src="/masala5.jpg" alt="artisans" />
            <div className="center-text">Masala Powders</div>
          </a>
        </div>
        <div className="column">
          <a href="Chutney.html">
            <img src="/chutney1.jpg" alt="artisans" />
            <div className="center-text">Chutneys</div>
          </a>
        </div>
        <div className="column">
          <a href="TableProduct.html">
            <img src="/Vase1.webp" alt="artisans" />
            <div className="center-text">Table Decors</div>
          </a>
        </div>
        <div className="column">
          <a href="JewlleryProduct.html">
            <img src="/Jewllery10.webp" alt="artisans" />
            <div className="center-text">Jewellery</div>
          </a>
        </div>
      </div>
    </>
  );
}

export default ShopByCategory;