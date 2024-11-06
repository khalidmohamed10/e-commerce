import React from 'react'
import { RiShoppingBag2Fill } from "react-icons/ri";
function Navbar() {
  return (
    <div className='navbar'>
        <nav className='nav'>
            <div className='logo'>
            <RiShoppingBag2Fill />
              somsuuq.com
            </div>
            <div className='menu'>
            <div className='item'>
                Home
            </div>
            <div className='item'>
                Shop
            </div>
            <div className='item'>
                About Us
            </div>
            <div className='item'>
                Contact Us
            </div>
            </div>

        </nav>

    </div>
  )
}

export default Navbar