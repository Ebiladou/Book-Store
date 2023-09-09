import React from 'react'
import { FaCartArrowDown } from 'react-icons/fa'
import '../App.css'

function Navbar() {
  return (
    <div className='navbar-container'>
        <h1>BOOKSTORE</h1>
        <ul>
            <li>Home</li>
            <li>E-Books</li>
            <li>Shop</li>
            <li>Membership</li>
        </ul>
        <div className="icon">
            <FaCartArrowDown/>
        </div>
    </div>
  )
}

export default Navbar