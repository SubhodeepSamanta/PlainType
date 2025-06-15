import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layouts/Layout'
import Posts from '../components/Posts/Posts'
import Login from '../components/Login/Login'
import SignUp from '../components/Signup/SignUp'

const HomePage = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Posts/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<SignUp/>}/>
        </Route>
    </Routes>
    </>
  )
}

export default HomePage