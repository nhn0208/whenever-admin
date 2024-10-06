import React from 'react'
import Sidebar from '@/components/layout/Sidebar'
const RootLayout = (
    { children } : { children: React.ReactNode}
) => {
  return (
    <div className='w-full'>
        <Sidebar/>
        <div className='ml-[200px]'>
            {children}
        </div>
    </div>
  )
}

export default RootLayout