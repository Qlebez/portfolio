import React from 'react';
import "./contact.css";
import phone from "../../img/phone-call.png"
import mail from "../../img/email.png"


const Contact = () => {  return (
    <div className='Contact'>
        <h1 id="contactID">Contact</h1>
        <h2>If you want to contact me : </h2>
        <div className='ways'>
        <img src={phone} alt="phone icons" />
          <h3>Phone Number : 06.44.02.98.15</h3>
          <img src={mail} alt="email icons" />
          <h3>E-Mail : q.lebez@gmail.com</h3>
        </div>
    </div>
  )
}


export default Contact;
