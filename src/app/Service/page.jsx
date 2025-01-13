import Link from 'next/link'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Service = () => {
  return (
    <>
    <div className='bg-green-300 display flex justify-between align-items-center px-5 py-3'>
     <h1 className='text-4xl' >Header</h1> 
     <div className="">
      <ul className='text-center'>
        <Link href="/Header"> Home</Link>
        <Link href="/About" className='mx-3'>About</Link>
        <Link href="/Product">Product</Link>
        <Link href="/Service" className='mx-3'>Service</Link>
      
      </ul>
     </div>
     <div className="">
     <Link href="/SignIn"><AccountCircleIcon className='text-black' /></Link>
     </div>
      </div>
    <h1 className='text-5xl'> THis is Service page</h1>
    </>
  )
}

export default Service