import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-section">
          <h1>Hi, I'm Summaya</h1>
          <p>Designer & Developer</p>
          <div className="image-container">
            <img src="/avatar.png" alt="avatar" />
          </div>
          <div className="info-box">
            <a href="#about" className="info-link">
              Let's know about me!
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
