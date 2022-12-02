import React from 'react';
import './cart.scss'

function Cart({cartItem, total}) {

const sum = total.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
var result = Math.round(sum * 100) / 100 
  return (
    <div className='cart__container'>
      {
      cartItem.length === 0 ?
       ( <h1>No item</h1>) :
       <>
       <table>
          <tr>
            <th>Quantity</th>
            <th>Item Name</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
         
            {
              cartItem.map(i => (
                <tr>
                <td>{i.id}</td>
                <td>{i.title}</td>
                <td><img src={i.image}/></td>
                <td>${i.price}</td>
                </tr>
              ))
            }
          
        </table>
           <div className='total__price'>
              <h1>Total Price: </h1>
              <h1>${result}</h1>
            </div>
       </>
        
      }
    </div>
  )
}

export default Cart