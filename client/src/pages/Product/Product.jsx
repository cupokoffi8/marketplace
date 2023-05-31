import React, { useState } from 'react'; 
import "./Product.scss"; 
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"; 
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"; 
import BalanceIcon from "@mui/icons-material/Balance"; 

export const Product = () => { 

  const [selectedImg, setSelectedImg] = useState(0); 
  const [quantity, setQuantity] = useState(1); 

  const images = [
    'https://images.pexels.com/photos/1234567/image1.jpg',
    'https://images.pexels.com/photos/9876543/image2.jpg'
  ];   

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e => setSelectedImg(0)} /> 
          <img src={images[1]} alt="" onClick={e => setSelectedImg(1)} /> 
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" /> 
        </div>
      </div> 
      <div className="right"> 
        <h2>Title</h2> 
        <span className="price">$199</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
          enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. 
        </p> 
        <div className="quantity">
          <button onClick={() => setQuantity((prev) => prev === 1 ? 1 : prev - 1)}>-</button> 
            {quantity} 
          <button onClick={() => setQuantity((prev) => prev+1)}>+</button> 
        </div>
        <button className="add">
          <AddShoppingCartIcon /> 
          ADD TO CART
        </button> 
        <div className="links">
          <div className="item"> 
            <FavoriteBorderIcon /> 
            ADD TO WISH LIST 
          </div> 
          <div className="item"> 
            <BalanceIcon /> 
            ADD TO COMPARE 
          </div> 
        </div>
        <div className="info">
          <span>Vendor: Suzanne Clemente&nbsp;</span>
          <span>Product Type: Tote&nbsp;</span>
          <span>Tag: Women, Totes&nbsp;</span>
        </div> 
        <hr /> 
        <div className="details">
        <span>DESCRIPTION</span> 
        <hr /> 
        <span>ADDITIONAL INFORMATION&nbsp;</span> 
        <hr /> 
        <span>FAQ</span>
        </div>
      </div> 
    </div>
  )
}

export default Product; 