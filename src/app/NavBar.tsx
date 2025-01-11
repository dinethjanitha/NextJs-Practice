import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div>
        <div className='flex list-none p-5 bg-slate-400 '>
            <li className='mr-2 hover:text-white'><Link href="/users">Home</Link></li>
            <li className='hover:text-white'><Link href="/admin">Admin</Link></li>
        </div>
    </div>
  )
}

export default NavBar