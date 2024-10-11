'use client'

import { useState } from 'react'
import { ModelProps } from '@/lib/interface'
import { cn } from '@/lib/utils'

import { columns } from './columns'

// import ui components
import { ModelDataTable } from './DataTable'
import { useCategoryList } from '@/providers/CategoryProvider'
import { useModel } from '@/providers/ModelProvider'
import CreateModel from '@/components/modelProduct/CreateModel'
import ModelCard from './modelDetail/ModelCard'



const ProductList = () => {
  const { models, setReload } = useModel()
  const { categoryList } = useCategoryList()
  const [modelDetail, setModelDetail] = useState<ModelProps>()

  return (
    <>
      <CreateModel />
      <div className='w-full flex flex-col border-2 border-black rounded-sm mt-5'>
        {
          models && categoryList && models.length > 0 ? 
            <ModelDataTable data={models} categoryList={categoryList} setReload={setReload} columns={columns} sendDataToParent={setModelDetail}/>
          : <>No item found</>
        }
        {
          modelDetail && categoryList && modelDetail.name && 
          <ModelCard model={modelDetail} categoryList={categoryList} setReload={setReload} />
        }
        <div 
          className={cn('absolute w-screen h-screen inset-0 m-auto bg-gray-400 opacity-40 z-5', !modelDetail && 'hidden')}
          onClick={()=>{
            setModelDetail(undefined)
          }}
        >
        </div>
      </div>
    </>
  )
}

export default ProductList