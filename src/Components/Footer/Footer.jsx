import React from 'react'
import './Footer.css'
import logo2 from '../../assets/logo2.png'
import user_icon from '../../assets/user_icon.svg'


const Footer = () => {
  return (
    <div className='footer'>
<div className="footer-top">

<div className="footer-top-left">
            <img className='ibrahim' src={logo2} alt="" />
            <p> <em>  "Every line of code is a step toward simplifying life." </em> <br /> As a dedicated fullstack developer, I merge creativity and precision to craft user-centric, scalable web applications. <em> My expertise ensures every solution is not just functional but impactful. </em ></p>
        </div>

        <div className="footer-top-right">
        <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder="Enter your email" />
                </div>
            <div className="footer-subscribe">Subscribe</div> 
        </div>
</div>


<hr />
    <div className="footer-bottom">
        <p className='footer-bottom-left'>@ 2024 Braimoh-Igbo Ibrahim. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with Me</p>
        </div>
    </div>



</div>




    


        

       

       

            


       
   

    
   
 

   
  )
}

export default Footer