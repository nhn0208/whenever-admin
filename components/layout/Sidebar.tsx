'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
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

const Sidebar = () => {
    const pathname = usePathname()
  return (
    <div className='w-[200px] h-full fixed left-0 bg-gray-600'>
        {
            routeSidebar.map(( route, index) => (
                <Link key={index} href={route.href}>
                    <div
                    className={cn(
                        'flex items-center justify-between',
                        pathname == route.href && 'bg-gray-500'
                    )}
                    >
                        <h1>{route.title}</h1>
                        <ChevronRight width={20} height={20} />
                    </div>
                </Link>
            ))
        }
    </div>
  )
}

export default Sidebar