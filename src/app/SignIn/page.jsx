import { Box, TextField } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const SignIn = () => {
  return (
     <>
      <div className='bg-green-300 display flex justify-between align-items-center px-5 py-3'>
     <h1 className='text-4xl' >Header</h1> 
     <div className="">
      <ul className='text-center'>
        <Link href="/"> Home</Link>
        <Link href="/About" className='mx-3'>About</Link>
        <Link href="/Product" >Product</Link>
      </ul>
     </div>
     <div className="">
     </div>
      </div>
      <h1 className='text-5xl'>THis is Sign In page</h1>
      <div className="m-20">
      <form className='border'>
        <Box>
        <TextField
          className='mx-2'
          id="outlined-required"
          label="Name"
          placeholder='Name'
        />
      <TextField
           
          id="outlined-required"
          label="Name"
          placeholder='Name'
        />
        </Box>
        <TextField
           fullWidth
          id="outlined-required"
          label="Name"
          placeholder='Name'
        />
        <TextField
           fullWidth
           id="outlined-required"
           label="Name"
           placeholder='Name'
         />
      </form>
      </div>
     </>
  )
}

export default SignIn