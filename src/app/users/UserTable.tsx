import { sort } from 'fast-sort';
import Link from 'next/link';
import React from 'react'


interface User{
  id: number,
  name:string,
  email:string,
}

interface Props{
  sorting : string;
}

const UserTable = async ({ sorting }:Props) => {

  const res = await fetch("https://jsonplaceholder.typicode.com/users/" , {cache:'no-store' , next:{revalidate:10}})
  const users:User[] = await res.json();

  const sortedUser =  sort(users).asc([
    sorting === "email" ? u => u.email : u => u.name
  ] );

  console.log("===================")
  // console.log(props)

  return (
    <div>
      {/* <h2 className='text-lg'>{sorting}</h2> */}
      <p>{new Date().toLocaleTimeString()}</p>
      {/* <p className='text-3xl p-8 my-auto text-white fond-blod hover:bg-sky-400 bg-blue-400'>Users</p> */}
      <table className='table'>
        <thead>
          
          <tr>
            <th className='text-lg text-black'><Link href="/users?sort=name">Name</Link></th>
            <th className='text-lg text-black'><Link href="/users?sort=email">Email</Link></th>
          </tr>
        </thead>
        <tbody>
          {sortedUser.map((user , key) => {
            return (
              <tr key={key}>
                <td  >{user.email}</td>
                <td  >{user.name}</td>
              </tr>
            )
          })}

        </tbody>
      </table>
      
      <button className="btn btn-primary mt-5">Add Cart</button>

    </div>
  )
}

export default UserTable