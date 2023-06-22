import React, { useState, useEffect } from 'react'; 
import WestOutlinedIcon from "@mui/icons-material/WestOutlined"; 
import EastOutlinedIcon from "@mui/icons-material/EastOutlined"; 
import "./Slider.scss"; 
import image1 from "./content/br.png"; 
import image2 from "./content/am.png"; 
import image3 from "./content/bm.png"; 

export const Slider = () => { 
  
  const [currentSlide, setCurrentSlide] = useState(0); 
  const data = [ image1, image2, image3, ]; 
  
  const prevSlide = () => { setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);}; 
  const nextSlide = () => { setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1); }; 
  
  useEffect(() => { 
    const timer = setTimeout(() => { 
      nextSlide(); }, 4000); 
      
      return () => { 
        clearTimeout(timer); 
      }; }, 
      
    [currentSlide]);
    
    return ( 
      <div className="slider"> 
        <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}> 
          <img src={data[0]} alt="" /> 
          <img src={data[1]} alt="" /> 
          <img src={data[2]} alt="" /> 
        </div> 
        {/* <div className="icons"> 
              <div className="icon" onClick={prevSlide}> 
                <WestOutlinedIcon /> 
              </div> 
              <div className="icon" onClick={nextSlide}> 
                <EastOutlinedIcon /> 
              </div> 
            </div> */} 
          </div> ); }; 
          
export default Slider;