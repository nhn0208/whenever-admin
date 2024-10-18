'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const routeSidebar = [
    {
        href: '/model-product',
        title: 'Models',
    },
    {
        href: '/products',
        title: 'Products',
    },
]

import { Menu } from 'lucide-react'

const SidebarList = (
  
) => {
    const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <div className='p-2 hover:opacity-80'>
          <Menu width={20} height={20}/>
        </div>
      </SheetTrigger>
      <SheetContent className="bg-white p-0 w-[200px]" side={"left"}>
        <SheetHeader className='pb-8'>
          <SheetTitle className='text-[20px] p-2'>Menu</SheetTitle>
        </SheetHeader>
            <div className="flex flex-col w-full overflow-auto border-y-[2px]">
                <div  onClick={()=> setOpen(!open)}>
                    {routeSidebar.map((route,index) => (
                        <Link key={index} href={route.href}>
                            <div
                            className={cn(
                                'flex items-center justify-between py-4 pl-4',
                                pathname == route.href && 'bg-gray-500'
                            )}
                            >
                                <h1>{route.title}</h1>
                                <ChevronRight width={20} height={20} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
      </SheetContent>
    </Sheet>
  )
}

export default SidebarList