import React from 'react'; 
import "./Footer.scss"; 
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <Link to="/products/1" style={{textDecoration: "none", color: "#808080"}}>Totes</Link>
          <Link to="/products/2" style={{textDecoration: "none", color: "#808080"}}>Buckets</Link>
          <Link to="/products/3" style={{textDecoration: "none", color: "#808080"}}>Crosses</Link>
          <Link to="/products/4" style={{textDecoration: "none", color: "#808080"}}>Clutches</Link>
        </div>
        <div className="item">
          <h1>Links</h1> 
          <a href="https://www.sclemente.us" style={{textDecoration: "none", color: "#808080"}}>About</a>
          <Link to="/products/1" style={{textDecoration: "none", color: "#808080"}}>Store</Link>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          Suzanne Clemente Handbags aren’t just beautifully styled and well made; the “Causes Series” 
            line is a stylish way to show off one’s passion for a particular cause. The ribbons and colors 
            of the “Causes Series” line represent the following causes: Breast Cancer Awareness, AIDS Awareness, 
            Autism Awareness, “Support Our Troops” and LGBT Awareness. We are currently developing a line 
            for “Back the Blue”. 
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            For any questions or inquiries you may have, please reach to us using our <Link to="/contact">Contact</Link> page. Thank you!
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
