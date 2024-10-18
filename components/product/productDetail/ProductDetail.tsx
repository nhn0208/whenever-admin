'use client'

import { updateProductById } from '@/app/api/Product'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ProductProps } from '@/lib/interface'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface ProductDetailProps {
  productDetail: ProductProps,
  sendDataToParent : React.Dispatch<React.SetStateAction<boolean>>
}

export const ProductDetail = ({productDetail, sendDataToParent} : ProductDetailProps) => {
  const [stock, setStock ] = useState<number>(productDetail?.instock)

  useEffect(()=>{
    setStock(productDetail.instock)
  },[productDetail])

  return (
    <div className='w-[350px] h-[600px] border-2 border-black rounded-md'>
      {
        productDetail && (
          <div className='h-full py-8 px-2 space-y-2 flex flex-col justify-between'>
            <div>
              <h1 className='text-sm font-bold'>{productDetail.name}</h1>
              <h2>{productDetail.size}</h2>
              <Image alt={productDetail.slug} src={productDetail.image} width={300} height={300} />
              <div className='w-full flex items-center gap-2'>
                <Label className='w-20'>Instock</Label>
                <Input className='border-black' type="number" value={stock?? productDetail.instock} min={0} onChange={(e)=>{
                  setStock(Number(e.target.value))
                }}/>
              </div>
              <div className='w-full flex items-center gap-2'>
                <Label className='w-20'>Sold</Label>
                <p>{productDetail.sold}</p>
              </div>
            </div>
            <Button
              disabled={stock === productDetail.instock} 
              variant={"default"}
              onClick={()=>{
                updateProductById( { _id: productDetail._id, instock : stock}).then(()=>{
                  sendDataToParent(prev=>!prev)
                })
              }}
            >
              Save
            </Button>
          </div>
        )
      }
    </div>
  )
}
