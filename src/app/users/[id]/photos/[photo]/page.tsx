import React from 'react'

interface Props {
    params : Promise<{ 
        id : number,
        photo: number, 
    }>
}


const UserPhotos = async ({ params }:Props) => {

  const id = (await params).id;
  const photo = (await params).photo;

  return (
    <div>
        <h1>User id: {id}</h1>
        <h1>User photo: {photo}</h1>
    </div>
  )
}

export default UserPhotos