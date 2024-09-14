import React, { useState } from 'react'
import './Navbar.css';
import logo from '../assets/logo.png';
import cartIcon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    return (
        <div>
            <div className="navbar">
                <div className="nav-logo">
                    <img src={logo} alt="logo" />
                    <p>SHOPPER</p>
                </div>
                <ul className='menus'>
                    <li onClick={() => setMenu("shop")}><Link to="/" style={{textDecoration:'none',color:'black'}}>Shop</Link>{menu == "shop" && <hr />}</li>
                    <li onClick={() => setMenu("mens")}><Link to="/mens" style={{textDecoration:'none',color:'black'}}>Men</Link>{menu == "mens" && <hr />}</li>
                    <li onClick={() => setMenu("womens")}><Link to="/womens" style={{textDecoration:'none',color:'black'}}>Women</Link>{menu == "womens" && <hr />}</li>
                    <li onClick={() => setMenu("kids")}><Link to="/kids" style={{textDecoration:'none',color:'black'}}>Kids</Link>{menu == "kids" && <hr />}</li>
                </ul>
                <div className="nav-cart">
                    <Link to="/login"><button>Login</button></Link>
                    <Link to="/cart"><img src={cartIcon} alt="cart-icon" /></Link>
                    <div className="cart-count">0</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
