// src/pages/ContactUs.jsx
import React, { useState } from 'react';
// Note: To make this form actually submit to Firebase, you'd import it here
// import { db } from '../firebase';
// import { collection, addDoc } from 'firebase/firestore';

function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ message: '', type: '' }); // type can be 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ message: 'Please fill in all fields.', type: 'error' });
      return;
    }
    
    // ---- FIREBASE SUBMISSION LOGIC WOULD GO HERE ----
    // try {
    //   await addDoc(collection(db, "contactMessages"), { ...formData, timestamp: new Date() });
    //   setStatus({ message: "Thank you for your message! We'll get back to you soon.", type: 'success' });
    //   setFormData({ name: '', email: '', subject: '', message: '' });
    // } catch (error) {
    //   setStatus({ message: `Error: ${error.message}`, type: 'error' });
    // }
    // --------------------------------------------------
    
    // For now, we'll just simulate a success message
    setStatus({ message: "Thank you! Your message has been sent.", type: 'success' });
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setStatus({ message: '', type: '' }), 5000);
  };

  return (
    <div style={{ paddingTop: '60px' }}>
      <header className="page-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out with any questions about our artisan products.</p>
      </header>

      <main>
        <div className="contact-container">
          <div className="contact-form">
            <h2>Get In Touch</h2>
            {status.message && <div className={`${status.type}-message`}>{status.message}</div>}
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>

          <div className="contact-info-section">
            <h3>Contact Information</h3>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div className="content">
                <h4>Our Location</h4><p>123 KarmaKriti Street, New Delhi, India</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-phone-alt"></i>
              <div className="content">
                <h4>Phone Number</h4><p>+91 9599198374</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div className="content">
                <h4>Email Address</h4><p>info@karmakriti.com</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ContactUs;