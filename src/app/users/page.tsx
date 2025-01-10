import { error, log } from 'console'
import React from 'react'
import UserTable from './UserTable';

interface Props{
  searchParams : { sort: string }
}

const UserPage = ({ searchParams : { sort }}:Props) => {

  return (
    <div>
      <h1>Users</h1>
      <h2 className=' text-xl'>{sort}</h2>
      <UserTable sorting = {sort}/>
    </div>
  )
}

export default UserPage;