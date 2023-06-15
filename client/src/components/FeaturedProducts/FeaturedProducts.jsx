import React from 'react'; 
import { Card } from '../Card/Card';
import "./FeaturedProducts.scss"; 
import useFetch from '../../hooks/useFetch';

export const FeaturedProducts = ({type}) => { 

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
    ); 

  return (
    <div className="featuredProducts">
        <div className="top">
            <h1>{type} Products</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
        </div>
        <div className="bottom">
            {error 
                ? "Something went wrong" 
                : loading
                    ? <h1 style={{display:"block", marginLeft:"auto", marginRight:"auto"}}>LOADING...</h1>
                    : data?.map((item) => (
                    <Card item={item} key={item.id} /> 
                ))}
        </div>
    </div>
  )
}
