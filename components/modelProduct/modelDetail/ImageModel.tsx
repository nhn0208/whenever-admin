import Image from 'next/image'
import { ModelProps } from '@/lib/interface'
import { X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface ImageModelProps {
    model: ModelProps,
    editMode: boolean,
    dataFromParent: string[],
    sendDataToParent: React.Dispatch<React.SetStateAction<string[]>>
}


const ImageModel = (
    {
        model,
        editMode,
        dataFromParent,
        sendDataToParent,
    } : ImageModelProps
) => {
  return (
    <div className='space-y-6'>
        <div className='flex items-center gap-4'>
            <h1>Images:</h1>
            <Input onChange={(e)=>{
                //console.log(e.target.value)
                sendDataToParent(prev=> [...prev, e.target.value])
            }} className={cn(!editMode && 'hidden')} type='url'
            />
        </div>
        <div className='flex justify-center'>
            {
                dataFromParent.map((image,index)=>(
                    <div  key={index} className='relative'>
                        <X 
                            width={20} height={20} 
                            className={cn('absolute top-1 right-1', !editMode && 'hidden')}
                            onClick={ async () => {
                            }}
                        />
                        <Image src={image} alt='' width={300} height={300} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ImageModel