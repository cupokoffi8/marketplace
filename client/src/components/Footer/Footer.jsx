import React from 'react'; 
import "./Footer.scss"; 

export const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1> 
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">
            <span className="black">SUZANNE</span> <span className="red">CLEMENTE </span>
          </span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved 
          </span> 
        </div>
        <div className="right">
          <img 
            src="/img/payment.png" 
            alt="Payment" 
            height="80px" 
            width="auto" 
            /> 
        </div>
      </div>
    </div>
  )
}
