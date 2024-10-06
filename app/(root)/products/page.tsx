import ProductList from '@/components/product/productList'
import React from 'react'

const ProductsPage = () => {
  return (
    <div className='w-full h-screen relative'>
      <div className='w-3/4 pt-10 mx-40'>
        <ProductList/>
      </div>
    </div>
  )
}

export default ProductsPage