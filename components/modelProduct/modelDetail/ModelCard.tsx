import { useState } from 'react'
import { ModelProps,  CategoryProps } from '@/lib/interface'
import { PlusCircle, X } from 'lucide-react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { cn } from '@/lib/utils';
import { Label } from '../../ui/label';
import { Textarea } from '../../ui/textarea';
import CategoryModel from './CategoryModel';
import ImageModel from './ImageModel';
import { updateModelById } from '@/app/api/Model';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

interface ModelCardProps {
  model: ModelProps,
  categoryList: CategoryProps[],
  setReload: React.Dispatch<React.SetStateAction<boolean>>
}

const ModelCard = ({ model, categoryList, setReload } : ModelCardProps) => {
    const [ editMode, setEditMode ] = useState<boolean>(false)
    const [ modelName, setModelName ] = useState<string>(model.name)
    const [ modelDescription, setModelDescription ] = useState<string>(model.description)
    const [price, setPrice] = useState<number>(model.price)
    const [ modelImage, setModelImage ] = useState<string[]>(model.image)
    const [ modelCategory, setModelCategory ] = useState<string>(model.category)

    const handleUpdate = async () => {
      const body ={
        _id : model._id,
        name: modelName,
        description: modelDescription,
        price,
        image: modelImage,
        category: modelCategory,
        products: model.products
      }
      await updateModelById(body)
      setEditMode(prev=>!prev)
      setReload(prev=>!prev)
    }

  return (
    <div className='w-2/3 h-2/3 absolute inset-0 m-auto z-10 border-2 border-black bg-white'>
        <ScrollArea className='w-full h-full'>
        {/** Product detail */}
        <div className='my-4 space-y-4 p-8 pt-16'>
          <div className='flex items-center space-x-4'>
            <Label>Name:</Label>
            <Input
              disabled={!editMode}
              value={modelName}
              onChange={(e)=>setModelName(e.target.value)}
            />
          </div>
          <div className='flex items-center space-x-4'>
            <Label>Description:</Label>
            <Textarea 
              disabled={!editMode}
              value={modelDescription} 
              onChange={(e=>setModelDescription(e.target.value))}
            />
          </div>
          <div className='flex items-center space-x-4'>
            <Label>Price:</Label>
            <Input
              type='number'
              min={10000}
              disabled={!editMode}
              value={price}
              onChange={(e)=>setPrice(e.target.valueAsNumber)}
            />
          </div>
          <CategoryModel
           model={model} 
           categorySelect={modelCategory}
           categoryList={categoryList} 
           editMode={editMode} 
           sendDataToParent={setModelCategory} 
          />
          <ImageModel 
            model={model} 
            editMode={editMode}
            dataFromParent={modelImage}
            sendDataToParent={setModelImage}
          />
        </div>
        <div className='w-full absolute top-0 right-0 flex items-center justify-between p-4  bg-white'>
          <h1 className='font-bold text-lg'>Collection's details</h1>
          <div className='flex items-center space-x-2'>
            <Button 
              variant={"default"}
             className={cn(editMode && 'hidden')}
             onClick={()=> setEditMode(true)}
            >
              Edit
            </Button>
            <Button 
              variant={"secondary"}
              className={cn(!editMode && 'hidden')}
              onClick={()=>setEditMode(false)}
            >
              Cancel
            </Button>
            <Button 
              variant={"default"} 
              className={cn(!editMode && 'hidden')}
              onClick={()=>{
                handleUpdate()
              }}
            >
              Save
            </Button>
          </div>
        </div>
        <ScrollBar />
    </ScrollArea>
      </div>
  )
}

export default ModelCard