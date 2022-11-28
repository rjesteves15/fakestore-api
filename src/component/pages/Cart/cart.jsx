import React from 'react';
import './cart.scss'

function Cart({cartItem}) {
  return (
    <div className='cart__container'>
      {
      cartItem.length === 0 ?
       ( <h1>No item</h1>) :
      
      cartItem.map(i => (
        <>
        <h1>{i.title}</h1>
        <img src={i.image}/>
        </>
      ))}
    </div>
  )
}

export default Cart