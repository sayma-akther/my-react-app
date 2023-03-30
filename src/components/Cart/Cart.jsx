import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
  // const cart = props.cart ; option 1
  //const {cart} = props; option 2

  let total = 0;
  let totalShipping = 0;
  for(const product of cart){
    total = total + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  const tax = total*5/100;
  const grantTotal = total + totalShipping + tax;

  return (
    <div className='cart'>
      <h4>Order Summary</h4>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Cost: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h5>Grant Total: ${grantTotal.toFixed(2)}</h5>
    </div>
  );
};

export default Cart;
