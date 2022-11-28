import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.scss'
import Navigation from './component/navigation/navigation'
import Cart from './component/pages/Cart/cart';
import Home from './component/pages/Home/home';
import Product from './component/pages/Products/product';

function App() {

  const [details, setDetails] = useState([]);


  const [itemCount, setItemCount] = useState(0);
  const [cartItem, setCartItem] = useState([])
  



  const viewDetails = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  };


  const addToCart = (details) =>{
    setItemCount(cartItem.length + 1)
    setCartItem(i => [...i, details])

  }

  return (
      <BrowserRouter>
          <Navigation itemCount={itemCount}/>
          <Routes>
                <Route path='/' element={<Home addToCart={addToCart} viewDetails={viewDetails} 
                details={details} setDetails={setDetails}/>} />
                <Route path='/product/:id' element={<Product />}/>
                <Route path='/cart' element={<Cart cartItem={cartItem}/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
