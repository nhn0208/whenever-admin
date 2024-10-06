import { ModelProps, CategoryProps } from "@/lib/interface"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { cn } from "@/lib/utils"
interface CategoryModelProps {
    model: ModelProps,
    categorySelect: string,
    categoryList: CategoryProps[],
    editMode: boolean,
    sendDataToParent: any
}

const CategoryModel = (
    {
        model,
        categorySelect,
        categoryList,
        editMode,
        sendDataToParent
    } : CategoryModelProps
) => {
  return (
    <div className='flex items-center space-x-4'>
        <Label>Type:</Label>
        <Label className={cn(editMode && 'hidden')}>
            {
                categoryList.find((value)=>value._id == categorySelect)?.categoryName
            }
        </Label>
        <Select onValueChange={(value)=>{
            sendDataToParent(value)
            console.log(value)
        }}>
            <SelectTrigger className={cn('w-[180px]', !editMode && 'hidden')}>
              <SelectValue defaultValue={model.category} placeholder="Select a type"/>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Type</SelectLabel>
                {
                    categoryList && categoryList.map(( category, index) => (
                        <SelectItem 
                            key={index} 
                            value={category._id}
                        >
                            {category.categoryName}
                        </SelectItem>
                    ))
                }
              </SelectGroup>
            </SelectContent>
        </Select>
    </div>
  )
}

export default CategoryModel