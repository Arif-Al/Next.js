import { Box, Button, TextField } from '@mui/material'
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
      <h1 className='text-5xl'>THis is Sign Up page</h1>
      <div className="m-20">
      <form style={{width:"30%",border:"1px solid",padding:"30px"}} className='rounded'>
        <Box className="border ">
        <TextField
        fullWidth
          id="outlined-required"
          label="Name"
          placeholder='Full name'
        />
      <TextField
      fullWidth
             className='my-3'
          id="outlined-required"
          label="Email"
          placeholder='Email'
        />
        </Box>
        <TextField
           fullWidth
          id="outlined-required"
          label="Password"
          placeholder='Password'
        />
        <TextField
        className='my-3'
           fullWidth
           id="outlined-required"
           label="Confirm Password"
           placeholder='Confirm Password'
         />
         <Button fullWidth variant="contained">Sign Up</Button>
         
      </form>
      </div>
     </>
  )
}

export default SignIn