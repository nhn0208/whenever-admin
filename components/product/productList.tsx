'use client'

import { useEffect, useState } from 'react'
import { ProductProps } from '@/lib/interface'
import { cn } from '@/lib/utils'

import { columns } from './columns'

// import ui components
import { ProductDataTable } from './DataTable'
import { getAllProduct } from '@/app/api/Product'
import AddProduct from '@/components/product/AddProduct'


const ProductList = () => {
  const [products,setProducts] = useState<ProductProps []>()
  const [productDetail, setProductDetail] = useState<ProductProps>()
  const [reloadPage, setReloadPage] = useState<boolean>(false)


  useEffect(()=>{
    getAllProduct().then(data => setProducts(data))
  },[reloadPage])
  return (
    <>
      <AddProduct setReloadPage={setReloadPage}/>
      <div className='flex flex-col border-2 border-black rounded-sm mt-5'>
        {
          products && products.length > 0 ? 
            <ProductDataTable data={products} columns={columns} sendDataToParent={setProductDetail}/>
          : <>No item found</>
        }
        {/* {
          productDetail && productDetail.name && 
          <ProductCard collection={productDetail} setReload={setReloadPage} />
        } */}
        <div 
          className={cn('absolute w-screen h-screen inset-0 m-auto bg-gray-400 opacity-40 z-5', !productDetail && 'hidden')}
          onClick={()=>{
            setProductDetail(undefined)
          }}
        >
        </div>
      </div>
    </>
  )
}

export default ProductList