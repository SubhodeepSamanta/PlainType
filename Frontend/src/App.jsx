import React from 'react'
import HomePage from './pages/HomePage'
import { userContextProvider } from './context/userContext'

const App = () => {
  return (
    <>
    <UserContextProvider>
    <HomePage/>
    </UserContextProvider>
    </>
  )
}

export default App