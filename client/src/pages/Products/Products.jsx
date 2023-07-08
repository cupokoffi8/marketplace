import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Products.scss';
import List from '../../components/List/List';
import useFetch from '../../hooks/useFetch';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';

export const Products = () => {
  window.scrollTo(0, 0); 
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(300);
  const [sort, setSort] = useState();
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [loading, setLoading] = useState(false); // Added loading state
  const isMobileScreen = window.innerWidth <= 767;

  const { data, error } = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);

  const handleChange = async (e) => { // Modified handleChange to async function
    setLoading(true); // Set loading state to true
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedSubCats((prevSelectedSubCats) => [...prevSelectedSubCats, value]);
    } else {
      setSelectedSubCats((prevSelectedSubCats) => prevSelectedSubCats.filter((item) => item !== value));
    }
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  useEffect(() => {
    if (!sidebarVisible) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [sidebarVisible]);

  useEffect(() => {
    setLoading(false); // Set loading state to false after sub-categories selection changes
  }, [selectedSubCats]);

  return (
    <div className="products">
      <div
        className={`left ${sidebarVisible ? '' : 'minimized'}`}
        style={{
          borderRight: `${!isMobileScreen ? '#212529 3px solid' : 'none'}`,
          marginLeft: `${isMobileScreen ? 'auto' : 'none'}`,
          marginRight: `${isMobileScreen ? 'auto' : 'none'}`,
        }}
      >
        <br />
        <br />
        <div className="filterItem">
          <h2 style={{ color: '#141414' }}>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
              <label style={{ color: '#212529' }} htmlFor={item.id}>
                {item.attributes.title}
              </label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2 style={{ color: '#141414' }}>Max Price</h2>
          <div className="inputItem">
            <span style={{ color: '#212529' }}>0</span>
            <input type="range" min={0} max={300} onChange={(e) => setMaxPrice(e.target.value)} />
            <span style={{ color: '#212529' }}>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2 style={{ color: '#141414' }}>Sort By</h2>
          <div className="inputItem">
            <input type="radio" id=":asc" value=":asc" name="price" onChange={(e) => setSort(':asc')} />
            <label style={{ color: '#212529' }} htmlFor=":asc">
              Price (Lowest first)
            </label>
          </div>
          <div className="inputItem">
            <input type="radio" id=":desc" value=":desc" name="price" onChange={(e) => setSort(':desc')} />
            <label style={{ color: '#212529' }} htmlFor=":desc">
              Price (Highest first)
            </label>
          </div>
        </div>
      </div>
      <div className="right">
        <div
          onClick={toggleSidebar}
          className={`toggleSidebar ${sidebarVisible ? '' : 'minimized'}`}
          style={{ top: `${sidebarVisible ? '-59px' : '-26.5px'}` }}
        >
          {!sidebarVisible ? (
            <h4 style={{ color: '#212529' }}>Filter {catId === 1 ? 'Totes' : catId === 2 ? 'Buckets' : catId === 3 ? 'Crosses' : 'Clutches'}</h4>
          ) : (
            <FiArrowUp className="toggleIcon" style={{ color: '#212529' }} />
          )}
        </div>
        <br />
        <br />
        <br />
        <img
          className="catImg"
          src={
            catId === 1
              ? '/img/totes.jpg'
              : catId === 2
              ? '/img/buckets.jpg'
              : catId === 3
              ? '/img/crosses.jpg'
              : '/img/clutches.jpg'
          }
          alt=""
        />
        <h2
          style={{
            textAlign: 'center',
            fontSize: '30px',
            textTransform: 'uppercase',
            marginTop: '-35px',
            textDecoration: `${!isMobileScreen ? 'underline' : 'none'}`,
            color: '#141414',
            borderRadius: `${isMobileScreen ? '30px' : 'none'}`,
            transform: `translateX(${!isMobileScreen ? '2.5vw' : '0px'})`,
          }}
        >
          {catId === 1 ? 'Totes' : catId === 2 ? 'Buckets' : catId === 3 ? 'Crosses' : 'Clutches'}
        </h2>
        {!error && !loading && <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>}
      </div>
    </div>
  );
};

export default Products;
