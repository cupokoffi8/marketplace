import React from 'react'; 
import "./List.scss"; 
import { Card } from "../Card/Card"; 

const List = () => {

    const data = [
        {
          id: 1,
          img: "https://images.pexels.com/photos/240200/pexels-photo-240200.jpeg",
          title: "Classic Leather Handbag",
          oldPrice: 129.99,
          price: 99.99
        },
        {
          id: 2,
          img: "https://images.pexels.com/photos/1440981/pexels-photo-1440981.jpeg",
          title: "Vintage Satchel Bag",
          oldPrice: 89.99,
          price: 69.99
        },
        {
          id: 3,
          img: "https://images.pexels.com/photos/247361/pexels-photo-247361.jpeg",
          title: "Chic Tote Bag",
          oldPrice: 149.99,
          price: 119.99
        },
        {
          id: 4,
          img: "https://images.pexels.com/photos/167839/pexels-photo-167839.jpeg",
          title: "Elegant Clutch",
          oldPrice: 79.99,
          price: 59.99
        }
      ];
      

  return (
    <div className="list">
        {data.map(item => (
            <Card item={item} key={item.id} /> 
        ))}
    </div>
  )
}

export default List