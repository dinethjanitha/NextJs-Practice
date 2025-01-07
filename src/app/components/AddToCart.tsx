'use client';
import React from 'react'

const AddToCart = () => {
    const cartControll = () => {
        console.log("Pressed!");
    }
  return (
    <div>
        <button onClick={cartControll} className='btn btn-primary mt-5'>Add to Cart</button>
    </div>
  )
}

export default AddToCart