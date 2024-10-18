import Image from 'next/image'
import { ModelProps } from '@/lib/interface'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { UploadButton } from '@/lib/uploadthing'
import axios from 'axios'
import { useEffect } from 'react'

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
    useEffect(()=>{

    },[dataFromParent])
  return (
    <div className='space-y-6'>
        { editMode && 
        <div className='flex items-center gap-4'>
            <h1>Images:</h1>
            <UploadButton endpoint='imageUploader' onClientUploadComplete={(fileUploaded)=>sendDataToParent(prev=>[fileUploaded[0].url,...prev])}/>
        </div>}
        <div className='flex justify-center'>
            {
                dataFromParent.map((image,index)=>(
                    <div  key={index} className='relative'>
                        <X 
                            width={20} height={20} 
                            className={cn('absolute top-1 right-1', !editMode && 'hidden')}
                            onClick={ async () => {
                                sendDataToParent(prev => prev.filter( item => item!= image))
                                await axios.delete("api/uploadthing", {
                                    data: {
                                      url: image,
                                    },
                                  });
                              
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