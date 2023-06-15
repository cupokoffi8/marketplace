import React from 'react'; 
import "./List.scss"; 
import Card from "../Card/Card"; 
import useFetch from '../../hooks/useFetch'; 

const List = ({subCats, maxPrice, sort, catId}) => {

  const {data, loading, error} = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
        (item) => `&[filters][sub_categories][id][$eq]=${item}`
      )}&[filters][price][$lte]=${maxPrice}&sort=price${sort}`
    ); 

  return (
    <div className="list">
        {error 
                ? "Something went wrong" 
                : loading
                    ? <h1 style={{display:"block", marginLeft:"auto", marginRight:"auto"}}>LOADING...</h1>
                    : data?.map((item) => (
                    <Card item={item} key={item.id} /> 
                ))}
    </div>
  );
};

export default List;