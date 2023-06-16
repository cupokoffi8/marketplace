import React, { useState } from 'react'; 
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import "./Navbar.scss";
import Cart from '../Cart/Cart';

export const Navbar = () => {


    const [open, setOpen] = useState(false);
    const products = useSelector((state) => state.cart.products);


    return (
        <>
            <nav>
                <Link to="/" className='logo' smooth={true} duration={1000} >
                    <img src="/img/sc-color-bar-transparent.png" alt="Suzanne Clemente" />
                        </Link>
                            <input className='menu-btn' type='checkbox' id='menu-btn'/>
                                <label className='menu-icon' for='menu-btn'>
                                    <span className='nav-icon'></span>
                                </label>
                                <ul className='menu'>
                                    <li><Link to="/products/1" className='active' smooth={true} duration={1000}>Totes</Link></li>
                                    <li><Link to="/products/2" className='active' smooth={true} duration={1000}>Buckets</Link></li>
                                    <li><Link to="/products/3" className='active' smooth={true} duration={1000}>Crosses</Link></li>
                                    <li><Link to="/products/4" className='active' smooth={true} duration={1000}>Clutches</Link></li>
                                    <li><Link to='contact' className='active' smooth={true} duration={1000}>Contact</Link></li>
                                    <li>
                                        <Link className='cart-mobile' onClick={() => setOpen(!open)} smooth={true} duration={1000}>
                                            <img src="/img/shopping-cart.png" alt="" style={{ height: "30px", width: "30px", marginRight: "5px" }} />
                                        </Link>
                                        </li>
                                    <li>
                                        <div className="cartIcon" onClick={() => setOpen(!open)}> {/* open is initialized as false, so !open === true */}
                                            <ShoppingCartOutlinedIcon />
                                            <span>{products.length}</span>
                                        </div>
                                    </li>
                                </ul>
                {open && <Cart />}
            </nav>
        </>
    );
};


export default Navbar;

