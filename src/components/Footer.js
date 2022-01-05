import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container' >
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>


          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <p>Contact</p>
            <p>+91 9898976790</p>

            <p>Support</p>
            <p>AutoCar@outlook.com</p>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
          </div>
        </div>
      </div>
     <p className='copy'> ©copyrights| Designed by Nithin Sarvade </p>
    </div>
  );
}

export default Footer;
