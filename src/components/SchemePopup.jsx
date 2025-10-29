import React from 'react';

function SchemePopup({ isOpen, onClose }) {
  // If the popup is not set to be open, don't render anything
  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <img src="/KarmaKriti.png" alt="Logo" className="popup-logo" />
        <h2>Supporting Women's Empowerment</h2>
        <p>
          KarmaKriti celebrates the spirit of women artisans. In line with this, we'd like to share information about the <strong>Mahila Samman Savings Certificate</strong>, a government scheme to empower women financially.
        </p>
        <a 
          href="https://www.indiapost.gov.in/Financial/Pages/Content/Mahila-Samman-Saving-Certificate.aspx" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="popup-link-btn"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default SchemePopup;