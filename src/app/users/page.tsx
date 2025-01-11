import React from 'react'
import UserTable from './UserTable';
import Link from 'next/link';

interface Props{
  searchParams : Promise<{ sort: string }>
}

const UserPage = async ({searchParams}:Props) => {

  const sort = (await searchParams).sort;

  return (
    <div>
      <h1>Users</h1>
      <Link className='btn' href="/users/new">Click Me</Link>
      {/* <h2 className=' text-xl'>{sort}</h2> */}
      <UserTable sorting = {sort}/>
    </div>
  )
}

export default UserPage;