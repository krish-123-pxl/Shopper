import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="footer_logo" />
                <p className='logo-text'>SHOPPER</p>
                <ul className="footer-links">
                    <li>Company</li>
                    <li>Product</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="footer-social-icon">
                    <div className="icons-container">
                        <img src={instagram_icon} alt="instagram_icon" />
                    </div>
                    <div className="icons-container">
                        <img src={pintester_icon} alt="instagram_icon" />
                    </div>
                    <div className="icons-container">
                        <img src={whatsapp_icon} alt="instagram_icon" />
                    </div>
                </div>
                <div className="copyright">
                    <hr />
                    <p>All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
