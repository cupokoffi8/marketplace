import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { makeRequest } from '../../makeRequest';
import { loadStripe } from '@stripe/stripe-js';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const styles = {
  shoppingCart: {
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#f7f7f7',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px',
  },
  image: {
    width: '100px',
    height: '100px',
    marginRight: '20px',
  },
  itemContent: {
    flex: '1',
  },
  title: {
    fontSize: '20px',
    marginBottom: '5px',
  },
  description: {
    marginBottom: '5px',
    color: '#555',
  },
  price: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#888',
  },
  deleteIcon: {
    cursor: 'pointer',
    marginLeft: '10px',
    color: '#888',
  },
  subtotalContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    borderTop: '1px solid #ccc',
    paddingTop: '10px',
  },
  subtotalLabel: {
    fontWeight: 'bold',
    color: '#555',
  },
  subtotalAmount: {
    fontWeight: 'bold',
    color: '#888',
  },
  checkoutButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#da3a3a',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    outline: 'none',
  },
  resetCart: {
    marginTop: '10px',
    color: '#da3a3a',
    cursor: 'pointer',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    textDecoration: 'underline',
  },
};

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    'pk_test_51NQBAsBFHAXjvzwwlcFeG5rPDoQz4BNymXoK8ZAVRa2fnl7R1EpDLlTfUPIDuRCFuSBwYyWSi4diSGEyuXkWDhAG00McaloZ6j'
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      const res = await makeRequest.post('/orders', {
        products,
      });

      const session = res.data.stripeSession;
      await stripe.redirectToCheckout({
        sessionId: session.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <br /> 
      <br />
      <div style={styles.shoppingCart}>
        <h1 style={styles.header}>Items in your cart</h1>
        {products?.map((item) => (
          <div style={styles.item} key={item.id}>
            <img src={item.img} alt="" style={styles.image} />
            <div style={styles.itemContent}>
              <h1 style={styles.title}>{item.title}</h1>
              <p style={styles.description}>{item.desc?.substring(0, 100)}</p>
              <div style={styles.price}>
                {item.quantity} x ${item.price}
              </div>
            </div>
            <DeleteOutlinedIcon
              style={styles.deleteIcon}
              onClick={() => dispatch(removeItem(item.id))}
            />
          </div>
        ))}
        <div style={styles.subtotalContainer}>
          <span style={styles.subtotalLabel}>SUBTOTAL</span>
          <span style={styles.subtotalAmount}>${totalPrice()}</span>
        </div>
        <button style={styles.checkoutButton} onClick={handlePayment}>
          PROCEED TO CHECKOUT
        </button>
        <br />
        <br />
        <span style={styles.resetCart} onClick={() => dispatch(resetCart())}>
          Reset Cart
        </span>
      </div>
    </>
  );
};

export default ShoppingCart;
