import React from 'react'; 
import { Link } from 'react-router-dom'; 
import "./Card.scss"; 

export const Card = ({item}) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image"> 
          {item?.attributes.isNew && <span>New</span>}
          <img src={item.attributes?.img?.data?.attributes?.url} alt="" className="mainImg" />
          <img src={item.attributes?.img2?.data?.attributes?.url} alt="" className="secondImg" /> 
        </div> 
        <hr /> 
        <h2>{item?.attributes?.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice || item?.attributes.price + 20}</h3>
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link> 
  );
};

export default Card;