// src/pages/AboutUs.jsx
import React from 'react';

function AboutUs() {
  return (
    <div className="container" style={{ paddingTop: '80px' }}>

      {/* Our Mission Section */}
      <div className="section">
        <h2>Our Mission</h2>
        <div className="mission-grid">
          <div className="mission-card">
            <i className="fas fa-heart"></i>
            <h3>Customer Satisfaction</h3>
            <p>Ensure consumer joy and satisfaction by delivering promising and quality handcrafted products.</p>
          </div>
          <div className="mission-card">
            <i className="fas fa-users"></i>
            <h3>Empowering Artisans</h3>
            <p>Keep the rural artisans and women at the center of what we do, supporting their livelihoods.</p>
          </div>
          <div className="mission-card">
            <i className="fas fa-laptop"></i>
            <h3>Technology Integration</h3>
            <p>Implement technology to ensure product quality, compliance, and enable entrepreneurship among rural communities.</p>
          </div>
          <div className="mission-card">
            <i className="fas fa-chart-line"></i>
            <h3>Sustainable Growth</h3>
            <p>Maintain a sustainable growth model with a focus on profitability and environmental responsibility.</p>
          </div>
          <div className="mission-card">
            <i className="fas fa-sync-alt"></i>
            <h3>Adaptability</h3>
            <p>Adapt faster to changing consumer requirements and market trends.</p>
          </div>
          <div className="mission-card">
            <i className="fas fa-handshake"></i>
            <h3>Passionate Team</h3>
            <p>Hire team members who care for our vision and have passion for impact-driven work.</p>
          </div>
        </div>
      </div>

      {/* Cultural Values Section */}
      <div className="section">
        <h2>Cultural Values</h2>
        <div className="mission-grid">
          <div className="mission-card">
            <i className="fas fa-shield-alt"></i>
            <h3>Trust & Integrity</h3>
            <p>Maintain transparency with our stakeholders and establish a linear organizational structure.</p>
          </div>
          <div className="mission-card">
            <i className="fas fa-globe-asia"></i>
            <h3>Social Impact</h3>
            <p>Relentless focus on improving the lives of rural artisans and their communities on a large scale.</p>
          </div>
          <div className="mission-card">
            <i className="fas fa-hands-helping"></i>
            <h3>Respect & Care</h3>
            <p>Value our stakeholders - artisans, communities, employees, consumers, and partners in the value chain.</p>
          </div>
          <div className="mission-card">
            <i className="fas fa-book-open"></i>
            <h3>Continuous Learning</h3>
            <p>Foster a culture of continuous learning and improvement in everything we do.</p>
          </div>
          <div className="mission-card">
            <i className="fas fa-lightbulb"></i>
            <h3>Innovation</h3>
            <p>Encourage a culture of innovation and experimentation to create better products and experiences.</p>
          </div>
          <div className="mission-card">
            <i className="fas fa-tasks"></i>
            <h3>Ownership</h3>
            <p>Promote a culture of ownership and accountability at all levels of our organization.</p>
          </div>
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="section1">
        <h2>Our Vision</h2>
        <b><p>Our vision is to empower the artisans and entrepreneurs of India’s cottage industry by preserving
          traditional crafts and elevating their work to reach a global audience.
          We are dedicated to nurturing the skills and heritage of artisans, who pour their heart and talent into each creation,
          blending age-old techniques with a touch of modernity.
          By bridging the gap between these artisans and the wider market, we aim to create a sustainable ecosystem
          that fosters economic growth for local communities while preserving India’s rich cultural heritage.
        </p></b>
      </div>
      <br />

    </div>
  );
}

export default AboutUs;