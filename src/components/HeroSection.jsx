import React from 'react';
import '../App.css';

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>You're Invited!</h1>
          <p>Join us in a celebration filled with joy, laughter, and love as we mark the beginning of a beautiful journey together.</p>
          <p>We, <strong>Yousef & Eman</strong>, are thrilled to share this special day with our beloved family and friends.</p>
          <p>Come and witness a moment of love, unity, and cherished memories. Your presence means the world to us!</p>
          <a href="#time" className="scroll-down">↓ Scroll to Show the Date</a>
        </div>
      </div>
    </section>
  );
}
