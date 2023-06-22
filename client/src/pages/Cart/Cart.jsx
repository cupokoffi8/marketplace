import React from 'react'; 
import "./Cart.scss"; 
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"; 
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from '../../redux/cartReducer'; 

const ShoppingCart = () => {
  const dispatch = useDispatch(); 
  const products = useSelector((state) => state.cart.products); 
  const totalPrice = () => {
    let total = 0; 
    products.forEach((item) => (
      total += item.quantity * item.price
    ));
    return total.toFixed(2); 
  }; 

  return (
    <div>
      <br />
      <h1>Items in your cart</h1> 
      {products?.map(item => (
        <div key={item.id}>
          <img src={item.img} alt="" /> 
          <div>
            <h1>{item.title}</h1> 
            <p>{item.desc?.substring(0,100)}</p>
            <div>{item.quantity} x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon onClick={() => dispatch(removeItem(item.id))} /> 
        </div>
      ))} 
      <div>
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div> 
      <button>PROCEED TO CHECKOUT</button> 
      <span onClick={() => dispatch(resetCart())}>Reset Cart</span> 
    </div>
  )
}

export default ShoppingCart;