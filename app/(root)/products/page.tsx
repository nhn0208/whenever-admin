import ProductList from '@/components/product/productList'
import React from 'react'

const ProductsPage = () => {
  return (
    <div className='w-full h-screen relative'>
      <div className='w-full pt-10 mx-auto'>
        <ProductList/>
      </div>
    </div>
  )
}

export default ProductsPage