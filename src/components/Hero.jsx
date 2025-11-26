import React from 'react';
import '../styles/components/Hero.css';
import headerImage from '../assets/header.png';

const Hero = () => {
  return (
    <section className="section__container header__container" id="home">
      <div className="header__image">
        <img src={headerImage} alt="header" />
      </div>
      <div className="header__content">
        <h3 className="section__subheader">BEST DESTINATIONS AROUND THE WORLD</h3>
        <h1>Travel, enjoy and live a new and full life</h1>
        <p>
          It's an invitation to break free from the ordinary, immerse yourself
          in diverse cultures, and embrace the beauty of the world around you.
          Let every journey be a chapter in your story of living life to its
          fullest potential.
        </p>
        <div className="header__btns">
          <button className="btn">Find out more</button>
          <a href="#">
            <span><i className="ri-play-fill"></i></span>
            Play Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;