import React from 'react'
import './Offer.css'
import exclusive_image from '../assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className='offer'>
        <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offer-right">
            <img src={exclusive_image} alt="exclusive_image" />
        </div>
    </div>
  )
}

export default Offer
