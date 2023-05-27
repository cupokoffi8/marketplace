import React from 'react'; 
import "Contact.scss"; 
import FacebookIcon from "@mui/icons-material/Facebook"; 
import InstagramIcon from "@mui/icons-material/Instagram"; 
import LinkedinIcon from "@mui/icons-material/LinkedIn"; 

const Contact = () => {
  return (
    <div className="contact">
        <div className="wrapper">
            <span>JOIN OUR NEWSLETTER:</span> 
            <div className="mail">
                <input type="text" placeholder="Enter your email" /> 
                <button>SUBMIT</button>
            </div> 
            <div className="icons">
                <FacebookIcon /> 
                <InstagramIcon /> 
                <LinkedinIcon /> 
            </div>
        </div>
    </div>
  )
}

export default Contact