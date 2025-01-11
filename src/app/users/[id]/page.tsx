import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
    params : Promise<{ id: number}>
}


const UserDetails = async ({params}:Props) => {

  const id = (await params).id;

//  console.log(isNaN(Number(id)))

  if( isNaN(Number(id))) notFound();
  if(id > 10) notFound();
  return (
    <div>UserDetails {id}</div>
  )
}

export default UserDetails