import React from 'react'; 
import { Card } from '../Card/Card';
import "./FeaturedProducts.scss"; 

export const FeaturedProducts = ({type}) => { 

  const data = [
    {
        id: 1, 
        img: "image", 
        img2: "image", 
        title: "Handbag", 
        isNew: true, 
        oldPrice: 19, 
        price: 12, 
    }, 
    {
        id: 2, 
        img: "image", 
        img2: "image", 
        title: "Handbag", 
        isNew: true, 
        oldPrice: 19, 
        price: 12, 
    }, 
  ]
  return (
    <div className="featuredProducts">
        <div className="top">
            <h1>{type} Products</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
        </div>
        <div className="bottom">
            {data.map(item => (
                <Card item={item} key={item.id} /> 
            ))}
        </div>
    </div>
  )
}
