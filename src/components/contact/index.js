import React from 'react';
import './contact.css';
import Footer from '../../assets/polygon.svg'
const Contact = () => {
  return (
    <div className="contactContainer">
      <h2>Quick Contact</h2>
      <h1>AVAILABLE @</h1>
      <div className="contactContent">
        <div className="persoalInfo">
          <div className="contactWrapper">
            <h1>Phone</h1>
            <p>054-3589687</p>
            <h2>Email</h2>
            <p>EliaBruchim26@gmail.com</p>
          </div>
        </div>
        <div className="form">
          <input className='formInput' type="text" placeholder="Name" />
          <input className='formInput' type="text" placeholder="Phone" />
          <input className='formInput messageInput' type="text" placeholder="Message" />
          <button className="formButton">Send</button>
        </div>
      </div>
      <div className='footerWrapper'>
        <img src={Footer} alt={Footer}/>
      </div>
    </div>
  );
};

export default Contact;
