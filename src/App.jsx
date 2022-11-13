import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.scss'
import Navigation from './component/navigation/navigation'
import Cart from './component/pages/Cart/cart';
import Home from './component/pages/Home/home';
import Product from './component/pages/Products/product';

function App() {

  return (
      <BrowserRouter>
          <Navigation />
          <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product' element={<Product />}/>
                <Route path='/cart' element={<Cart />}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
