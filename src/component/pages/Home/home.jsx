import React, { useState, useEffect}from 'react';
import './home.scss'

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => setData(data))
  })


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