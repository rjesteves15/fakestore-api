import React, { useState, useEffect}from 'react';
import { NavLink as Link } from "react-router-dom";
import useFetch from '../../useFetch';
import './home.scss'

function Home() {
  const [newData, setNewData] = useState([]);
  const [data] = useFetch("https://fakestoreapi.com/products");
  const [category] = useFetch("https://fakestoreapi.com/products/categories")

  const handleCategory = (items) => {
      fetch(`https://fakestoreapi.com/products/category/${items}`)
      .then(res => res.json())
      .then(data => setNewData(data));
  }

  const handleViewAll = () => {
      setNewData(data)
  }
  return (
    <div className='home__container'>

    <div className="category__container">
            <button onClick={handleViewAll}>All</button>
            {category.map((items) => (
              <button onClick={() => handleCategory(items)}>{items}</button>
            ))}
          </div>

        <div className="data__container">
                { newData.length === 0 ?
                data.map((item, index) => {
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
                }) :
                newData.map((item, index) => {
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
                })
                }
              </div>
    </div>
  )
}

export default Home