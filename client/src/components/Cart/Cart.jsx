import React, { useEffect } from 'react';
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from '../../redux/cartReducer';
import { makeRequest } from '../../makeRequest';
import { loadStripe } from '@stripe/stripe-js';

const Cart = ({ onClose }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (
      total += item.quantity * item.price
    ));
    return total.toFixed(2);
  };

  const stripePromise = loadStripe('pk_test_51NQBAsBFHAXjvzwwlcFeG5rPDoQz4BNymXoK8ZAVRa2fnl7R1EpDLlTfUPIDuRCFuSBwYyWSi4diSGEyuXkWDhAG00McaloZ6j');

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      const res = await makeRequest.post("/orders", {
        products,
      });

      const session = res.data.stripeSession;
      await stripe.redirectToCheckout({
        sessionId: session.id,
      });

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get("success");

    if (success === "true") {
      dispatch(resetCart());
    }
  }, []);

  return (
    <div className="cart">
      <div className="closeButton" onClick={onClose}>
        <CloseIcon />
      </div>
      <h1>Items in your cart</h1>
      {products?.map(item => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">{item.quantity} x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" onClick={() => dispatch(removeItem(item.id))} />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart;
