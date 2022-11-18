import React, { useState, useEffect}from 'react';
import { NavLink as Link } from "react-router-dom";
import useFetch from '../../useFetch';
import './home.scss'

function Home() {
  const [newData, setNewData] = useState([]);
  const [data] = useFetch("https://fakestoreapi.com/products");
  const [category] = useFetch("https://fakestoreapi.com/products/categories")

  const [details, setDetails] = useState([]);

  const handleCategory = (items) => {
      fetch(`https://fakestoreapi.com/products/category/${items}`)
      .then(res => res.json())
      .then(data => setNewData(data));
  }

  const handleViewAll = () => {
      setNewData(data)
  }

  const viewDetails = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  };
  return (
    <div className='home__container'>

        <div className="category__container">
            <button onClick={handleViewAll}>All</button>
            {category.map((items) => (
              <button onClick={() => handleCategory(items)}>{items}</button>
            ))}

        </div>

        <div className="data__container">
          <div className='left__container'>
          { newData.length === 0 ?
                data.map((item, index) => {
                  const { id, price, image, title, rating } = item;

                  return (
                    <div className="card">
                      <img key={index} src={item.image} />

                      <div className="item__information">
                        {/* <p>{title}</p> */}
                        <h3>${price}</h3>
                        <button onClick={() => viewDetails(id)}>
                             View Details
                        </button>
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
                        <button onClick={() => viewDetails(id)}>
                             View Details
                        </button>
                      </div>
                    </div>
                  );
                })
                }
          </div>  

          <div className='right__container'>
              {details.length === 0 ? (
                <div className="noDetails">
                  <h2>You can view item details here</h2>
                </div>
              ) : (
                <div className="withDetails">
                  <h2>{details.title}</h2>
                  <img src={details.image} />
                  <p>${details.price}</p>
                  <p className="description">{details.description}</p>
                  <button>Add to Cart</button>
                </div>
              )}
          </div> 
        </div>
    </div>
  )
}

export default Home