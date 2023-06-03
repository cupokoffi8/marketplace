import React from 'react'; 
import "./List.scss"; 
import { Card } from "../Card/Card"; 

const List = () => {

    const data = [
        {
          id: 1,
          img: "https://images.pexels.com/photos/4830930/pexels-photo-4830930.jpeg",
          title: "Classic Leather Handbag",
          oldPrice: 129.99,
          price: 99.99
        },
        {
          id: 2,
          img: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg",
          title: "Vintage Satchel Bag",
          oldPrice: 89.99,
          price: 69.99
        },
        {
          id: 3,
          img: "https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg",
          title: "Chic Tote Bag",
          oldPrice: 149.99,
          price: 119.99
        },
        {
          id: 4,
          img: "https://images.pexels.com/photos/5462562/pexels-photo-5462562.jpeg",
          title: "Elegant Clutch",
          oldPrice: 79.99,
          price: 59.99
        }
      ];
      

  return (
    <div className="list">
        {data?.map(item => (
            <Card item={item} key={item.id} /> 
        ))}
    </div>
  )
}

export default List