import React from 'react'
import hand_icon from '../assets/hand_icon.png'
import hero_image from '../assets/hero_image.png'
import arrow_icon from '../assets/arrow.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hand-icon'>
                    <p>NEW</p>
                    <img src={hand_icon} alt="hand_icon" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>latest collection</div>
                <img src={arrow_icon} alt="arrow_icon" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="hero_image" />
        </div>
      
    </div>
  )
}

export default Hero
