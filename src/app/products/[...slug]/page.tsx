import React from 'react'

interface Props{
    params: {slug: string[] } , 
    searchParams : { sort : string}

}

const Products = ({ params : { slug } , searchParams : { sort }  }:Props) => {
  return (
    <div>
      <h4>Products</h4>
      <p>{ slug.join('/')}</p>
      <p>{ sort}</p>

    </div>
  )
}

export default Products