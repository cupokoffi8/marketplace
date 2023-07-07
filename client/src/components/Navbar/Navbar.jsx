import React, { useState, useEffect } from 'react';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import "./Navbar.scss";
import Cart from '../Cart/Cart';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [confirm, setConfirm] = useState(false); 
  const products = useSelector((state) => state.cart.products); 
  const isMobileScreen = window.innerWidth <= 767;

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMenuItemClick = () => {
    setMobileMenuOpen(false); // Close the mobile menu when a menu item is clicked
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get("success");

    if (success === "true") {
       setConfirm(true); 
    }
  }, []);

  return (
    <>
      <nav>
        <Link to="/" className='logo' smooth={true} duration={1000}>
          <img src="/img/sc-color-bar-transparent.png" alt="Suzanne Clemente" style={{transform: `translateX(${isMobileScreen ? '-25px' : '0px'}`}}/>
        </Link>
        <input className='menu-btn' type='checkbox' id='menu-btn' checked={mobileMenuOpen} onChange={handleMobileMenuToggle} />
        <label className='menu-icon' htmlFor='menu-btn'>
          <span className='nav-icon'></span>
        </label>
        <ul className={`menu ${mobileMenuOpen ? 'open' : ''}`}>
          <li><Link to="/products/1" className='active' smooth={true} duration={1000} onClick={handleMenuItemClick}>Totes</Link></li>
          <li><Link to="/products/2" className='active' smooth={true} duration={1000} onClick={handleMenuItemClick}>Buckets</Link></li>
          <li><Link to="/products/3" className='active' smooth={true} duration={1000} onClick={handleMenuItemClick}>Crosses</Link></li>
          <li><Link to="/products/4" className='active' smooth={true} duration={1000} onClick={handleMenuItemClick}>Clutches</Link></li>
          <li><Link to='contact' className='active' smooth={true} duration={1000} onClick={handleMenuItemClick}>Contact</Link></li>
          <li>
            <Link className='cart-mobile' to="/cart" smooth={true} duration={1000} onClick={handleMenuItemClick}>
              <img src="/img/shopping-cart.png" alt="" style={{ height: "30px", width: "30px", marginRight: "5px" }} />
            </Link>
          </li>
          <li>
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{(!confirm) ? products.length : 0}</span>
            </div>
          </li>
        </ul>
        {open && <Cart />}
      </nav>
    </>
  );
};

export default Navbar;
