import React, { useState } from 'react';
import './Product.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer'; 
import { Oval } from 'react-loader-spinner'; 

export const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState('img');
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  console.log(useFetch(`/products/${id}?populate=*`));

  window.scrollTo(0, 0); 

  return (
    <>
    <br />
      <br />
      <div className="product">
        {loading ? (
          <h1 style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
            <Oval
              height={80}
              width={80}
              color="#da3a3a"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="#212529"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </h1>
        ) : (
        <>
          <div className="left">
            <div className="mainImg">
              <img src={data?.attributes?.[selectedImg]?.data?.attributes?.url} alt="" />
            </div>
            <div className="images">
              <img src={data?.attributes?.img?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg('img')} />
              <img src={data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg('img2')} />
            </div>
          </div>
          <div className="right">
            <h2>{data?.attributes?.title}</h2>
            <span className="price">${data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data?.attributes?.img?.data?.attributes?.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon />
              ADD TO CART
            </button>
            {/* <div className="links">
              <div className="item">
                <FavoriteBorderIcon />
                ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon />
                ADD TO COMPARE
              </div>
            </div> */}
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
              </>
              )}
        </div>
      </>
    )
}

export default Product; 