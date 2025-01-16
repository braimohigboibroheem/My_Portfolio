import React from 'react'
import './Aboutme.css'
import theme_pattern from '../../../assets/theme_pattern.svg'
import Lappypix from '../../../assets/Lappypix.png'



const Aboutme = () => {
  return (
    <div id='about' className='about'>

        <div className="about-title">

<h1>About Me</h1>
<img src={theme_pattern} alt="" />
        </div>

<div className="about-sections">

<div className="about-left">
<img className='lappyPic' src={Lappypix} alt="" />
</div>


<div className="about-right">
<div className="about-para">
  <p>As an experienced Full Stack Developer, I am passionate about building seamless, scalable, and user-centric applications from the ground up. I enjoy tackling challenges and continuously learning new tools and best practices to stay ahead in this ever-evolving field. </p>
  <p>My technical expertise in both front-end and back-end spans across Html, CSS, Typescript, JavaScript, Node.js, React, Express, MongoDB and other modern frameworks, allowing me to take on projects from concept to completion.</p>
</div>

<div className="about-skills">
  <div className="about-skill"><p>HTML & CSS </p> <hr style={{width:"50%"}}/></div>
 <div className="about-skill"><p>TypeScript </p> <hr style={{width:"70%"}}/></div>
 <div className="about-skill"><p>JavaScript </p> <hr style={{width:"60%"}}/></div>
 <div className="about-skill"><p>React JS </p> <hr style={{width:"50%"}}/></div>  
</div>


</div>

</div>


<div className="about-achievements">

<div className="about-achievement">
  <h1>10+</h1>
  <p>TRACK RECORD</p>
</div>
<hr />

<div className="about-achievement">
  <h1>20+</h1>
  <p>PROJECT COMPLETED</p>
</div>
<hr />


<div className="about-achievement">
  <h1>20+</h1>
  <p>SATISFIED CLIENTS</p>
</div>

</div>



        </div>
  )
}

export default Aboutme