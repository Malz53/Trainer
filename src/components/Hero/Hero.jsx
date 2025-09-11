import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h"></div>
        <Header/>
        <div className="right-h">Right</div>

    </div>
  )
}

export default Hero;