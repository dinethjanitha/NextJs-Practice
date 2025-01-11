import React from 'react'

interface Props{
    params: Promise<{slug: string[] }> , 
    searchParams : Promise<{ sort : string}>

}

const Products = async ({params , searchParams}:Props) => {

  const slug = (await params).slug;
  const sort = (await searchParams).sort;

  return (
    <div>
      <h4>Products</h4>
      <p>{ slug.join('/')}</p>
      <p>{ sort}</p>

    </div>
  )
}

export default Products