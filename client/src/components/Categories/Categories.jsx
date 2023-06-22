import React from 'react';
import "./Categories.scss";
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className='categories'>
      <div className="category-row">
        <div className="category-column">
          <div className="category-item">
            <Link className="link" to="products/1">
              Totes
            </Link>
            <img
              src="/img/totes.jpg"
              alt="Category 1"
            />
          </div>
        </div>
        <div className="category-column">
          <div className="category-item">
            <Link className="link" to="products/2">
              Buckets
            </Link>
            <img
              src="/img/buckets.jpg"
              alt="Category 2"
            />
          </div>
        </div>
      </div>
      <div className="category-row">
        <div className="category-column">
          <div className="category-item pride-item">
            <Link className="link" to="products/1">
              Pride
            </Link>
            <img
              src="/img/pride.png"
              alt="Category 3"
            />
          </div>
        </div>
      </div>
      <div className="category-row">
        <div className="category-column">
          <div className="category-item">
            <Link className="link" to="products/3">
              Crosses
            </Link>
            <img
              src="/img/crosses.jpg"
              alt="Category 4"
            />
          </div>
        </div>
        <div className="category-column">
          <div className="category-item">
            <Link className="link" to="products/4">
              Clutches
            </Link>
            <img
              src="/img/clutches.jpg"
              alt="Category 5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
