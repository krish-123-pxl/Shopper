import React from 'react'
import {ShopContext} from '../Context/ShopContext'
import {useParams} from 'react-router-dom'

const Product = () => {
  const { all_product } = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_product.find(item => item.id === Number(productId));
  return (
    <div>
        
      
    </div>
  )
}

export default Product
