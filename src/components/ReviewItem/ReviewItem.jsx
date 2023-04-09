import React from 'react';
import './ReviewItem.css';
import { RiDeleteBinFill } from 'react-icons/ri';

const ReviewItem = ({product,handleRemoveFromCart}) => {
  const {img,id,name,quantity,price} = product;
  console.log({name});
  return (
    <div className='review-item'>
      <img src={img} alt="" />
      <div className="review-details">
        <p className='product-title'>{name}</p>
        <p>Price: <span className='orange-text'>${price}</span></p>
        <p>Order Quantity: <span className='orange-text'>{quantity}</span></p>
      </div>
      <button onClick={() => handleRemoveFromCart(id)} className='button-delete'>
        <RiDeleteBinFill className='delete-icon'/>
      </button>
    </div>
  );
};

export default ReviewItem;