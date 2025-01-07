import { error, log } from 'console'
import React from 'react'
import UserTable from './UserTable';



const UserPage = async () => {

  return (
    <div>
      <h1>Users</h1>
      <UserTable/>
    </div>
  )
}

export default UserPage;