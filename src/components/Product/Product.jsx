import React from 'react';
import './Product.css';

const Product = (props) => {
  const {img,name,price,seller,ratings} = props.product;
  return (
    <div className='product'>
      <img src={img} alt="image" />
      <div className="product-info">
        <h5 className='product-name'>{name}</h5>
        <p><strong>${price}</strong></p>
        <p>Manufecturar: {seller}</p>
        <p>Ratings: {ratings} Stars</p>
      </div>
      <button className='btn-cart'>Add to cart</button>
    </div>
  );
};

export default Product;