import React from 'react'; 
import "./List.scss"; 
import Card from "../Card/Card"; 
import useFetch from '../../hooks/useFetch'; 
import { Oval } from 'react-loader-spinner'; 

const List = ({subCats, maxPrice, sort, catId}) => {

  const {data, loading, error} = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
        (item) => `&[filters][sub_categories][id][$eq]=${item}`
      )}&[filters][price][$lte]=${maxPrice}&sort=price${sort}`
    ); 

    const isMobileScreen = window.innerWidth <= 767; 

  return (
    <div className="list">
        {error 
                ? <div>
                    <h3>No Results</h3>
                    <br /> 
                    <br /> 
                  </div>
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
  );
};

export default List;