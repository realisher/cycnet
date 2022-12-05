/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../App.css';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <div className='header'>
        <img  src="images/log1.png"/>
        <h1>CYCNET PLATFORM</h1>
        </div>
        <div className='mail'>
            <h2>Feel free to contact us:</h2>
            <div className='pos'>
            <i class="fa fa-envelope fa-fw fa foot">
              </i>
            <p>cycnet@gmail.com</p>
            </div>
        </div>
        <div className='right'>
          <p>© 2022 CRD Network, all rights reserved</p>
          <p> Designated trademarks and brands are the property of their respective owners</p>
          <p> Our website uses cookies to improve your experience</p>
        </div>
      
      
      

    </div>
  );
}

export default Footer;