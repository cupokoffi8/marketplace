import React from 'react'; 
import Link from 'react-router-dom'; 
import "./Card.scss"; 

export const Card = (item) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="card">
        <div className="image"> 
          <img src={item.img} alt="" className="mainImg" />
          <img src={item.img2} alt="" className="secondImg" /> 
        </div>
      </div>
    </Link> 
  )
}
