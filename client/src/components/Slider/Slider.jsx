import React, { useState } from 'react'; 
import WestOutlinedIcon from "@mui/icons-material/WestOutlined"; 
import EastOutlinedIcon from "@mui/icons-material/EastOutlined"; 
import "./Slider.scss"; 
import image1 from "./content/1.jpg"; 
import image2 from "./content/2.jpg";  
import image3 from "./content/3.jpg"; 

export const Slider = () => { 

  const [currentSlide, setCurrentSlide] = useState(0); 

  const data = [
    image1, 
    image2, 
    image3, 
  ]; 

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1) 
  }; 
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1) 
  }; 

  return (
    <div className="slider">
        <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" /> 
            <img src={data[1]} alt="" /> 
            <img src={data[2]} alt="" />
        </div> 
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestOutlinedIcon /> 
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastOutlinedIcon /> 
            </div> 
        </div>
    </div>
  )
} 

export default Slider; 