import React, { Component } from 'react'
import "./Categories.scss"; 
import { Link } from 'react-router-dom'; 

const Categories = () => {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row">
                    <img 
                        src="https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg" 
                        alt="Category 1" 
                        /> 
                    <button>
                        <Link className="link" to="products/1">
                            Sale
                        </Link>
                    </button>
                </div> 
                <div className="row">
                    <img 
                        src="https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg" 
                        alt="Category 2" 
                        /> 
                    <button>
                        <Link className="link" to="products/1">
                            Totes
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img 
                        src="https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg" 
                        alt="Category 3" 
                        /> 
                    <button>
                        <Link className="link" to="products/1">
                            New Season
                        </Link>
                    </button>
                </div> 
            </div> 
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img 
                                src="https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg" 
                                alt="Category 4" 
                                /> 
                            <button>
                                <Link className="link" to="products/1">
                                    Pride
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                    <div className="row">
                        <img 
                            src="https://images.pexels.com/photos/1460838/pexels-photo-1460838.jpeg" 
                            alt="Category 5" 
                            /> 
                        <button>
                            <Link className="link" to="products/1">
                                Accessories
                            </Link>
                        </button>
                    </div>
                    </div>
                </div> 
                <div className="row">
                    <img 
                        src="https://images.pexels.com/photos/157888/fashion-glasses-go-pro-female-157888.jpeg" 
                        alt="Category 6" 
                        /> 
                    <button>
                        <Link className="link" to="products/1">
                            Wallets
                        </Link>
                    </button>
                </div> 
            </div> 
        </div>
    )
} 

export default Categories