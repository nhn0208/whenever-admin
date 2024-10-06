'use client'

import { useState } from 'react'

// Import for form component
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"

// Import from lib
import { cn } from '@/lib/utils'

// Import api
import { addNewModel } from '@/app/api/Model'
//Import ui components
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'
import { useModel } from '@/providers/ModelProvider'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
    name: z.string().min(2, {
      message: "name must be at least 2 characters.",
    }),
  })

const CreateModel = () => {
  const router = useRouter()
  const { setReload } = useModel()
    const [hiddenForm, setHiddenForm] = useState<boolean>(true)
    // Declare form
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
      }
    })
    
    // Submit form
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
      try {
        await addNewModel(values)
        .then((response)=>{
          console.log(response)
          setReload(prev=>!prev)
          router.refresh()
        })
      }
      catch ( error ) {
        
      }
    }
  return (
    <>
        <div className='w-full flex justify-end'><Button onClick={()=>setHiddenForm(!hiddenForm)}><PlusCircle width={24} height={24}/></Button></div>
        <div className={cn('w-1/2 h-max absolute inset-0 m-auto z-10 border-2 border-black bg-white p-4', hiddenForm && 'hidden')}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter collection's name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit">Save</Button>
          </form>
        </Form>
      </div>
      {/* Lớp phủ mở bên ngoài khi mở form */}
      <div 
        className={cn('absolute w-screen h-screen inset-0 m-auto bg-gray-400 opacity-40 z-5', hiddenForm && 'hidden')}
        onClick={()=>setHiddenForm(!hiddenForm)}
      >

      </div>
    </>
  )
}

export default CreateModel