import { Box, Button, TextField, Typography } from '@mui/material'
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
        <Link href="/Service" className='mx-3'>Service</Link>
      </ul>
     </div>
     <div className="">
     </div>
      </div>
      <h1 className='text-5xl'>THis is Sign In page</h1>
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
        className='my-3'
           fullWidth
           id="outlined-required"
           label="Confirm Password"
           placeholder='Confirm Password'
         />
        <TextField
        className='my-3'
           fullWidth
           id="outlined-required"
           label="Confirm Password"
           placeholder='Confirm Password'
         />
         <Button fullWidth variant="contained">Sign In</Button>
         <Typography>Don’t have an account? <Link href="/sign-up" className='text-blue-600-400 mt-20 border-b-2 border-blue-700'>Sign Up</Link> </Typography>
      </form>
      </div>
     </>
  )
}

export default SignIn