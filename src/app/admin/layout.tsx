import React from 'react'
import { ReactNode } from 'react'


interface Props {
    children : ReactNode
}


const AdminLayout  = ({ children }:Props) => {
  return (
    <div className='flex'>
      
        <h2 className=' bg-slate-500 p-10 m-2 text-black'>Admin LayOut</h2>
        <div>{children}</div>
    </div>
  )
}

export default AdminLayout 