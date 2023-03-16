import React from 'react'
import Button from '../common/Button/button';
import './style.css'

const HeroSection = () => {
  return <div className='hero-section-wrapper'>
    <div className='flex absolute-center flex-col hero-section max-width'>
      {/* -------------------------- Heading ------------------------- */}
      <div className='hero-heading'>
      Polars Dev Coming Soon!
      </div>

      {/* ----------------------- Sub-Heading ------------------------ */}
      <div className='hero-subheading'>
        Polaris for your Developement.
      </div>
      <a href='#'>
        <Button buttonText="Notify Me"/>
      </a>
    </div> 
    </div>
}

export default HeroSection;

