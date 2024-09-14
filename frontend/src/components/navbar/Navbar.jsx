import React from 'react'
import './Navbar.css';
import logo from '../assets/logo.png';
import cartIcon from '../assets/cart_icon.png';

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="nav-logo">
                    <img src={logo} alt="logo" />
                    <p>SHOPPER</p>
                </div>
                <ul className='menus'>
                    <li>Shop <hr/></li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                </ul>
                <div className="nav-cart">
                    <button>Login</button>
                    <img src={cartIcon} alt="cart-icon" />
                    <div className="cart-count">0</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
