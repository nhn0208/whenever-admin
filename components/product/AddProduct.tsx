'use client'
import { useEffect, useState } from 'react'
// Import from lib
import { cn } from '@/lib/utils'

// Import api
import { addNewProduct, getProductByModelId } from '@/app/api/Product'
//Import ui components
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useModel } from '@/providers/ModelProvider'
import { Label } from '../ui/label'
import { ModelProps, ProductProps } from '@/lib/interface'
import Image from 'next/image'
import { formatToVND } from '@/lib/format'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'
import { updateModelById } from '@/app/api/Model'

interface Props {
    setReloadPage: React.Dispatch<React.SetStateAction<boolean>>
  }
const AddProduct = (
    { setReloadPage } : Props
) => {
    const { models } = useModel()
    const [selectModel, setSelectModel] = useState<ModelProps>()
    const [products, setProducts] = useState<ProductProps[]>()
    const [size, setSize] = useState<string>()
    const [hiddenForm, setHiddenForm] = useState<boolean>(true)

    const handleAdd = ()=>{
        if (selectModel) {
            const body = {
                name: selectModel.name,
                image: selectModel.image[0],
                price: selectModel.price,
                size: size,
                modelId: selectModel._id,
            }
            addNewProduct(body)
            .then(()=>setReloadPage(prev=>!prev))
        }
    }

    
    useEffect(()=>{
        if (selectModel) {
            getProductByModelId(selectModel?._id)
            .then(data => setProducts(data))
        }
    },[selectModel])
    
  return (
    <>
        <div className='w-full flex justify-end'><Button onClick={()=>setHiddenForm(!hiddenForm)}><PlusCircle width={24} height={24}/></Button></div>
        <div className={cn('w-2/3 h-2/3 absolute inset-0 m-auto z-10 border-2 border-black bg-white', hiddenForm && 'hidden')}>
            <ScrollArea className='w-full h-full'>
                <div className='space-y-8  p-8'>
                    <Select
                        onValueChange={(select)=>{
                            setSelectModel(models?.find( value => value._id === select))
                        }}
                    >
                        <SelectTrigger className='w-full'>
                            <SelectValue placeholder='Sellect a product' />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {
                                    models && models.map((collection, index)=>(
                                        <SelectItem key={index} value={collection._id}>{collection.name}</SelectItem>
                                    ))
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    {
                        selectModel && (
                            <>
                                <Image alt='' src={selectModel.image[0]} width={300} height={300} />
                                <h1>Price: {formatToVND(selectModel.price)}</h1>
                            </>
                        )
                    }
                    
                    <div className='flex items-center space-x-4'>
                        <Label>Size:</Label>
                        <Button  
                            className={cn(size=='Size S' ? 'bg-gray-500': 'bg-white', 'text-black border border-black')}
                            onClick={()=>setSize('Size S')}
                            disabled={products?.some(value => value.size == 'Size S')}
                        >
                            Size S
                        </Button>
                        <Button  
                            className={cn(size=='Size M' ? 'bg-gray-500': 'bg-white', 'text-black border border-black')}
                            onClick={()=>setSize('Size M')}
                            disabled={products?.some(value => value.size == 'Size M')}
                        >
                            Size M
                        </Button>
                        <Button  
                            className={cn(size=='Size L' ? 'bg-gray-500': 'bg-white', 'text-black border border-black')}
                            onClick={()=>setSize('Size L')}
                            disabled={products?.some(value => value.size == 'Size L')}
                        >
                            Size L
                        </Button>
                    </div>               
                    <div className='w-full flex justify-end' >
                        <Button disabled={!selectModel} onClick={()=>{
                            handleAdd()
                        }}>
                            Add
                        </Button>
                    </div>
                </div>
                <ScrollBar/>
            </ScrollArea>
        </div>
        {/* Lớp phủ mở bên ngoài khi mở form */}
        <div 
          className={cn('absolute w-screen h-screen inset-0 m-auto bg-gray-400 opacity-40 z-5', hiddenForm && 'hidden')}
          onClick={()=>setHiddenForm(!hiddenForm)}
        ></div>
    </>
  )
}

export default AddProduct