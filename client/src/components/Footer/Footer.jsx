import React from 'react'; 
import "./Footer.scss"; 

export const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Totes</span>
          <span>Buckets</span>
          <span>Crosses</span>
          <span>Clutches</span>
        </div>
        <div className="item">
          <h1>Links</h1> 
          <span>FAQ</span>
          <span>Pages</span>
          <span>Store</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          Suzanne Clemente Handbags aren’t just beautifully styled and well made; the “Causes Series” 
            line is a stylish way to show off one’s passion for a particular cause. The ribbons and colors 
            of the “Causes Series” line represent the following causes: Back the Blue, Breast Cancer 
            Awareness, AIDS Awareness, Autism Awareness, “Support Our Troops” and LGBT Awareness. We are 
            currently developing a line for “Back the Blue”.
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
