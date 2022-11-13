import React, { useState, useEffect}from 'react';
import useFetch from '../../useFetch';
import './home.scss'

function Home() {
  const [data] = useFetch("https://fakestoreapi.com/products")


  return (
    <div className='home__container'>


        <div className='data__container'>
            { 
              data.map((item, index) => (
                  <img key={index} src={item.image}/>   
              ))
            }
        </div>
    </div>
  )
}

export default Home