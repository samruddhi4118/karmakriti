// src/pages/Stories.jsx
import React, { useState, useEffect } from 'react';

// A single story component to avoid repeating code
const StoryCard = ({ story }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [commentsVisible, setCommentsVisible] = useState(false);

  const handleLike = () => setIsLiked(!isLiked);
  const handleToggleComments = () => setCommentsVisible(!commentsVisible);

  return (
    <section className="stories fade-in">
      <h1>{story.title}</h1>
      <div className="story">
        <div className="story-meta">
          <span className="date"><i className="far fa-calendar-alt"></i> {story.date}</span>
          <span className="category"><i className="far fa-folder"></i> {story.category}</span>
        </div>
        <img src={story.image} alt={story.alt} className="story-image" />
        {story.paragraphs.map((p, index) => <p key={index}>{p}</p>)}

        <div className="story-actions">
          <button className={`like-btn ${isLiked ? 'liked' : ''}`} onClick={handleLike}>
            <i className={`fa-heart ${isLiked ? 'fas' : 'far'}`}></i>
            <span>{isLiked ? 'Liked' : 'Like'}</span>
          </button>
          <button className="comment-btn" onClick={handleToggleComments}>
            <i className="far fa-comment"></i> Comments
          </button>
          <button className="share-btn"><i className="far fa-share-square"></i> Share</button>
        </div>

        {commentsVisible && (
          <div className="comments-section active">
            {/* Here you would map over actual comments */}
            <div className="comment-form">
              <textarea placeholder="Add a comment..."></textarea>
              <button>Post Comment</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};


function Stories() {
  // Data for the stories can be stored in an array like this
  const mainStories = [
    {
      title: 'Amruta Suryawanshi: Shaping Dreams with Decorative Pottery',
      date: 'June 15, 2023',
      category: 'Pottery Artisans',
      image: '/Vase1.webp',
      alt: 'Pottery Artisan',
      paragraphs: [
        "Meet Amruta Suryawanshi, a 38-year-old woman from our Organization, who along with her husband and two children, has persevered despite financial struggles. Living with limited means, Amruta's family couldn't access traditional banking or loan services. But everything changed when she was associated with our Sanstha, we recognized her talent and provided her with a loan of 30,000 rupees. Amruta decided to invest this amount in her passion: creating decorative pottery.",
        "With her loan, Amruta carefully planned her expenses, sourcing quality clay and paints in bulk. This allowed her to produce a variety of decorative pots, vases, and other unique handcrafted items. As her pottery business flourished, Amruta's family experienced newfound financial security and independence. Through her artistry and dedication, Amruta is shaping a brighter future for her family, one beautiful piece of pottery at a time."
      ]
    },
    // ... add other main stories here
  ];

  // Logic for scroll animations
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    const checkScroll = () => {
      animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) {
          element.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);


  return (
    <div style={{ paddingTop: '60px' }}>
      <header className="stories-header">
        <h1>Success Stories</h1>
        <p>Discover inspiring journeys of artisans and entrepreneurs who transformed their lives through craft and determination.</p>
      </header>

      <main>
        {mainStories.map((story, index) => <StoryCard key={index} story={story} />)}
        
        <h2 className="section-title fade-in">More Inspiring Stories</h2>
        <div className="story-grid">
          <div className="story-card slide-in-left">
            <img src="/women1.webp" alt="Weaving Artisan" />
            <div className="story-card-content">
              <h3>Meena Patel: Weaving Success</h3>
              <p>How a traditional weaver transformed her craft into a thriving business with our support.</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>
          <div className="story-card fade-in">
            <img src="/Jewllery1.jpg" alt="Jewelry Maker" />
            <div className="story-card-content">
              <h3>Lakshmi Rao: Jewelry Artisan</h3>
              <p>Creating exquisite handcrafted jewelry that celebrates traditional techniques with modern designs.</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>
          <div className="story-card slide-in-right">
            <img src="/Table1.jpg" alt="Textile Artist" />
            <div className="story-card-content">
              <h3>Arjun Singh: Textile Innovation</h3>
              <p>Combining traditional textile techniques with sustainable practices to create eco-friendly products.</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Stories;