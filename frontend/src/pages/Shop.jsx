import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/popular/Popular'
import Offer from '../components/Offer/Offer'
import NewCollection from '../components/newCollection/NewCollection'
import NewsLetter from '../components/NewLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollection/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
