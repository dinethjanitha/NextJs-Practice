import React from 'react'

interface Props {
    params : { 
        id : number,
        photo: number, 
    }
}


const UserPhotos = ({ params : {id , photo}}:Props) => {
  return (
    <div>
        <h1>User id: {id}</h1>
        <h1>User photo: {photo}</h1>
    </div>
  )
}

export default UserPhotos