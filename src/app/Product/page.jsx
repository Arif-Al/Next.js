import Link from 'next/link'
import React from 'react'

const Product = () => {
  return (
<>
<div className='bg-green-300 display flex justify-between align-items-center px-5 py-3'>
     <h1 className='text-4xl' >Header</h1> 
     <div className="">
      <ul className='text-center'>
        <Link href="/Header"> Home</Link>
        <Link href="/About" className='mx-3'>About</Link>
        <Link href="/Product">Product</Link>
      </ul>
     </div>
     <div className="">
      
     </div>
      </div>
      <h1 className='text-5xl'>This is product page</h1>
</>
  )
}

export default Product