import React from 'react';
import { NavLink as Link } from "react-router-dom";
import './navigation.scss'

function Navigation() {
  return (
    <div className='nav__container'>
        <div className='nav__logo'>
            <h2>FakeStore</h2>
        </div>

        <div className='nav__link'>
          
          <ul>
            <li> 
                <Link to="/" activeClassName="active"> Home</Link>
            </li>
            <li> 
                <Link to="/product" activeClassName="active"> Product</Link>
            </li>
            <li>
                <Link to="/cart" activeClassName="active"> Cart</Link>
            </li>
          </ul>
          

       
        </div>
    </div>
  )
}

export default Navigation