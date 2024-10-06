'use client'

import { getProductBySlug } from '@/app/api/Product'
import { ProductProps } from '@/lib/interface'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const DetailProductPage = () => {
    const pathname = usePathname().split('/')
    
    const [product,setProduct] = useState<ProductProps>()

    useEffect(()=>{
        const fetch = async () => {
            await getProductBySlug(pathname[pathname.length -1])
            .then(response => setProduct(response[0]))
        }
        fetch()
    },[])
  return (
    <div>
        {product ? product.name : ''}
    </div>
  )
}

export default DetailProductPage