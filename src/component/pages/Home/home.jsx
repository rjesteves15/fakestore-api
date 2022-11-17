import React, { useState, useEffect}from 'react';
import { NavLink as Link } from "react-router-dom";
import useFetch from '../../useFetch';
import './home.scss'

function Home() {
  const [data] = useFetch("https://fakestoreapi.com/products")


  return (
    <div className='home__container'>


<div className="data__container">
        {data.map((item, index) => {
          const { id, price, image, title, rating } = item;

          return (
            <div className="card">
              <img key={index} src={item.image} />

              <div className="item__information">
                {/* <p>{title}</p> */}
                <h3>${price}</h3>
                <Link to={`/product/${item.id}`}>
                    View 
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Home