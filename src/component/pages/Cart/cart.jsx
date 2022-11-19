import React from 'react';
import './cart.scss'

function Cart({cartItem}) {
  return (
    <div className='cart__container'>
      {cartItem.map(i => (
        <>
        <h1>{i.title}</h1>
        <img src={i.image}/>
        </>
      ))}
    </div>
  )
}

export default Cart