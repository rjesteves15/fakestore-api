import React, { useState, useEffect}from 'react';
import { NavLink as Link } from "react-router-dom";
import useFetch from '../../useFetch';
import './home.scss'

function Home() {
  const [data] = useFetch("https://fakestoreapi.com/products")


  return (
    <div className='home__container'>


        <div className='data__container'>
            { 
              data.map((item, index) => (
                <>
                  <img key={index} src={item.image}/>   
                  <br />
                  <Link to={`/product/${item.id}`} >View Details</Link>
                </>
              ))
            }
        </div>
    </div>
  )
}

export default Home