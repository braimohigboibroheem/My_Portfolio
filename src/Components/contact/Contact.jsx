import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon  from '../../assets/call_icon.svg'


const Contact = () => {

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
        </div>

<div className="contact-section">
  <div className="contact-left"><h1>Let's Talk</h1>
  <p>
    I’m currently open to taking on new projects! If you have a software web application in mind that you’d like to bring to life, don’t hesitate to reach out. I’m available and excited to collaborate,feel free to send me a message anytime.
</p>
  <div className="contact-details">
    <div className="contact-detail">
      <img src={mail_icon} alt="" />
      <p>braimohigboibroheem@gmail.com</p>
      </div>
      
      <div className="contact-detail">
      <img src={call_icon} alt="" />
      <p>+234906880281</p>
      </div>

      <div className="contact-detail">
      <img src={location_icon} alt="" />
      <p>Lagos, Nigeria</p>
      </div>
      
      </div>
      </div>
<form method='post' target='blank' action='https://rake.red/api/personal-mails/profile' id='receive'  className="contact-right">
  <label htmlFor="">Your Name</label>
  <input type="text" placeholder='Enter your name' name='name' />
  <label htmlFor="">Your Email</label>
  <input type="email" placeholder='Enter your email' name='email' />
  <label htmlFor="">Write your message here</label>
  <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
  <button className='contact-submit' type="submit">Submit now</button>
</form>



</div>





        </div>
  )
}

export default Contact