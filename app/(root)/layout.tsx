import React from 'react'
import Sidebar from '@/components/layout/Sidebar'
const RootLayout = (
    { children } : { children: React.ReactNode}
) => {
  return (
    <div className='w-full'>
        <Sidebar/>
        <div className=''>
            {children}
        </div>
    </div>
  )
}

export default RootLayout