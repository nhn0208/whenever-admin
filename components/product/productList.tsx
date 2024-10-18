'use client'

import { useEffect, useState } from 'react'
import { ProductProps } from '@/lib/interface'
import { cn } from '@/lib/utils'

import { columns } from './columns'

// import ui components
import { ProductDataTable } from './DataTable'
import { getAllProduct } from '@/app/api/Product'
import AddProduct from '@/components/product/AddProduct'
import {ProductDetail} from './productDetail/ProductDetail'


const ProductList = () => {
  const [products,setProducts] = useState<ProductProps []>()
  const [productDetail, setProductDetail] = useState<ProductProps>()
  const [reloadPage, setReloadPage] = useState<boolean>(false)


  useEffect(()=>{
    getAllProduct().then(data => setProducts(data))
  },[reloadPage])
  return (
    <div>
      <AddProduct setReloadPage={setReloadPage}/>
      <div className='w-full flex items-center justify-center gap-8'>
        <div className='w-2/3 flex flex-col border-2 border-black rounded-sm mt-5'>
          {
            products && products.length > 0 ? 
              <ProductDataTable data={products} columns={columns} sendDataToParent={setProductDetail} />
            : <>No item found</>
          }
        </div>
        {productDetail && <ProductDetail productDetail={productDetail} sendDataToParent={setReloadPage} />}
      </div>
    </div>
  )
}

export default ProductList