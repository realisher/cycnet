import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={process.env.PUBLIC_URL + '/videos/video-2.mp4'} autoPlay loop muted />
      <h1>INCREASE YOUR KNOWLEDGE WITH CYCNET</h1>
    
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
         Get started
        </Button>
      </div>
    </div>
  );
}

export default HeroSection; 