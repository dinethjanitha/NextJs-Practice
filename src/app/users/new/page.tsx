'use client';
import React from 'react'
import { useRouter } from 'next/navigation'

const UserNewPage = () => {
    const router = useRouter();
  return (
    <div>
        <p>UserNewPage</p>
        <button onClick={() => { router.push('/users?sort=email') }} className='btn btn-primary mt-3'>Navigate</button>
    </div>
  )
}

export default UserNewPage