import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import './Product.css';

const Product = (props) => {
  const {img,name,price,seller,ratings} = props.product;
  const handleAddToCart = props.handleAddToCart;

  return (
    <div className='product'>
      <img src={img} alt="image" />
      <div className="product-info">
        <h5 className='product-name'>{name}</h5>
        <p><strong>${price}</strong></p>
        <p>Manufecturar: {seller}</p>
        <p>Ratings: {ratings} Stars</p>
      </div>
      <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add to cart <FaCartPlus /></button>
    </div>
  );
};

export default Product;