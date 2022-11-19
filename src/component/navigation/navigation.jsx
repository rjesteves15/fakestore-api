import React from 'react';
import { NavLink as Link } from "react-router-dom";
import './navigation.scss'

function Navigation({itemCount}) {
  return (
    <div className='nav__container'>
        <div className='nav__logo'>
            <h2>FakeStore</h2>
        </div>

        <div className='nav__link'>
          
          <ul>
            <li> 
                <Link to="/" activeclassname="active"> Home</Link>
            </li>
            <li>
                <Link to="/cart" activeclassname="active"> Cart<span>{itemCount}</span></Link>
            </li>
          </ul>
          

       
        </div>
    </div>
  )
}

export default Navigation