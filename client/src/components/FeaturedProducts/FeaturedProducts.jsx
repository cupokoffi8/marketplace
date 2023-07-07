import React from 'react'; 
import { Card } from '../Card/Card';
import "./FeaturedProducts.scss"; 
import useFetch from '../../hooks/useFetch';
import styled from '@emotion/styled';
import { Oval } from 'react-loader-spinner';

export const FeaturedProducts = ({type}) => { 

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
    ); 

  return (
    <>
      <div className="featuredProducts">
        <div className="top">
            <h1>{type} Products</h1>
        </div>
        <div className="bottom">
            {error 
                ? (<br />,
                  <h4>Something went wrong</h4>)
                : loading
                    ? <h1 style={{display:"block", marginLeft:"auto", marginRight:"auto"}}>
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
                    : data?.map((item) => (
                    <Card item={item} key={item.id} /> 
                ))}
        </div>
      </div>
    </>
  ); 
}; 
