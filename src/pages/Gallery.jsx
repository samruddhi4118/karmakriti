// src/pages/Gallery.jsx
import React from 'react';

// An array of image sources for easier management
const images = [
  "/WhatsApp Image 2024-11-04 at 21.48.44_99cb698d.jpg", "/WhatsApp Image 2024-11-04 at 21.48.45_be068bd3.jpg",
  "/WhatsApp Image 2024-11-04 at 21.48.45_f423dae1.jpg", "/WhatsApp Image 2024-11-04 at 21.48.46_fa69b213.jpg",
  "/whats.jpeg", "/WhatsApp Image 2024-11-04 at 21.48.47_1ea680e6.jpg",
  "/WhatsApp Image 2024-11-04 at 21.48.48_6cd1a1fb.jpg", "/WhatsApp Image 2024-11-04 at 21.48.50_b3e3da14.jpg",
  "/WhatsApp Image 2024-11-04 at 21.48.50_e31507ad.jpg", "/whats1.jpeg",
  "/WhatsApp Image 2024-11-04 at 21.48.51_25c8d5f8.jpg", "/WhatsApp Image 2024-11-04 at 21.48.53_00f35c14.jpg",
  "/WhatsApp Image 2024-11-04 at 21.48.54_7cd492a7.jpg", "/whats2.jpeg",
  "/WhatsApp Image 2024-11-04 at 21.48.56_f5127f87.jpg", "/WhatsApp Image 2024-11-04 at 21.48.57_4bbad9e5.jpg",
  "/women2.webp", "/WhatsApp Image 2024-11-04 at 21.48.57_9b2f2405.jpg", "/whats3.jpeg",
  "/WhatsApp Image 2024-11-05 at 09.54.59_3dea4588.jpg", "/women1.webp",
  "/WhatsApp Image 2024-11-04 at 21.48.59_47c30ffd.jpg", "/women.webp", "/whats5.jpeg",
  "/WhatsApp Image 2024-11-04 at 21.49.00_063399f4.jpg", "/WhatsApp Image 2024-11-05 at 09.54.54_0dfeb06c.jpg",
  "/whats4.jpeg"
];

function Gallery() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <header className="page-header">
        <h1>Our Gallery</h1>
        <p>A glimpse into the beautiful world of our artisans' creations.</p>
      </header>
      <main className="gallery-container">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`Gallery item ${index + 1}`} />
          </div>
        ))}
      </main>
    </div>
  );
}

export default Gallery;