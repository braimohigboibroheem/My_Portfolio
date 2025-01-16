import React from 'react'
import './Hero.css'
import standingpix2 from '../../../assets/standingpix2.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

 

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img className='profilepic' src= {standingpix2} alt="" />
        <h1><span>I'm BRAIMOH-IGBO  Ibrahim, </span>a fullstack developer based in Nigeria.</h1>
        <p>An experienced Full Stack Developer, specialized in building dynamic, scalable web applications from the ground up, with expertise in both front-end and back-end technologies.</p>

<div  className="hero-action">
<div className="hero-connect"> <AnchorLink offset={50}  className='anchor-link' href="#contact">  Connect with me </AnchorLink> 
</div>
<div className="hero-resume">My resume</div>
</div>




    </div>
  )
}

export default Hero