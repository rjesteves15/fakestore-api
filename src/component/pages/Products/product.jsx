import React from 'react';
import { useParams } from 'react-router';
import useFetch from '../../useFetch';
import './product.scss'

function Product() {
  const {id} = useParams();
  const [item] = useFetch(`https://fakestoreapi.com/products/${id}`)

  return (
    <div className='product__container'>
      <div className='left__container'>
           <img src={item.image}/>
      </div>

      <div className='right__container'>
          <h3>{item.title}</h3>
          <h6>{item.description}</h6>
          <p>${item.price}</p>
      </div>
      
    </div>
  )
}

export default Product
