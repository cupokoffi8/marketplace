import React from 'react'; 
import "./Cart.scss"; 
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"; 

const Cart = () => {

  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/4830930/pexels-photo-4830930.jpeg",
      title: "Classic Leather Handbag",
      desc: "suynygcnhregcunehwygcnuy",
      oldPrice: 129.99,
      price: 99.99
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg",
      title: "Vintage Satchel Bag",
      desc: "suynygcnhregcunehwygcnuy",
      oldPrice: 89.99,
      price: 69.99
    }, 
  ]

  return (
    <div className="cart">
      <h1>Items in your cart</h1> 
      {data?.map(item => (
        <div className="item"key={item.id}>
          <img src={item.img} alt="" /> 
          <div className="details">
            <h1>{item.title}</h1> 
            <p>{item.desc?.substring(0,100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" /> 
        </div>
      ))} 
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div> 
      <button>PROCEED TO CHECKOUT</button> 
      <span className="reset">Reset Cart</span> 
    </div>
  )
}

export default Cart;