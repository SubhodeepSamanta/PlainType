import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='w-full h-[calc(100vh-72px)] flex items-center justify-center'><SignIn signUpUrl='/register'/></div>
  )
}

export default LoginPage