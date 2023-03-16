import React from 'react'; 
import WestOutlinedIcon from "@mui/icons-material/WestOutlined"; 
import EastOutlinedIcon from "@mui/icons-material/EastOutlined"; 
import "./Slider.scss"; 

export const Slider = () => { 

  const data = [
    "./content/1.jpg", 
    "./content/2.jpg", 
    "./content/3.jpg", 
  ]; 

  return (
    <div className="slider">
        <div className="container">
            <img src={data[0]} alt="" /> 
            <img src={data[1]} alt="" /> 
            <img src={data[2]} alt="" />
        </div> 
        <div className="icons">
            <div clasName="icon">
                <WestOutlinedIcon /> 
            </div>
            <div clasName="icon">
                <EastOutlinedIcon /> 
            </div> 
        </div>
    </div>
  )
} 

export default Slider; 