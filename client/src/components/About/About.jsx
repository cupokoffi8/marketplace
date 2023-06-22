import React from "react"; 
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './index.css'; 

const About = () => {
    AOS.init();
    return(
        <div id="features"> 
        <div className='features-text' style={{transform: "translateY(-35px)"}}>
            <h1 data-aos="fade-down" data-aos-duration="1000">Quality Designs Made Right</h1>
            <hr data-aos="fade-down" data-aos-duration="1000" className="divider" /> 
            <p data-aos="fade-down" data-aos-duration="1000" className="feedback">
            Suzanne Clemente Handbags aren’t just beautifully styled and well made; the “Causes Series” 
            line is a stylish way to show off one’s passion for a particular cause. The ribbons and colors 
            of the “Causes Series” line represent the following causes: Back the Blue, Breast Cancer 
            Awareness, AIDS Awareness, Autism Awareness, “Support Our Troops” and LGBT Awareness. We are 
            currently developing a line for “Back the Blue”. <br /> 
            <br /> 
            We would love to hear feedback from you on your personal cause. We want to inspire positive 
            change through fashion. What’s your cause? “Wear your Cause on your sleeve!”
                </p> 
            </div> 
        </div> 
    )
}

export default About; 