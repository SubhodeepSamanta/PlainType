import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Img from './Img';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
    const [open,setOpen]= useState(false);
  return (
    <div className=' py-2 flex items-center justify-between mb-4'>
        <Link className="left gap-2 flex items-center justify-between">
        <Img src="logo.png" className='w-8 h-8 object-cover' alt="logo" />
        <p className='font-bold text-xl'>PlainType</p>
        </Link>

        <div className="right-mobile flex md:hidden">
            <button onClick={()=>setOpen(prev=>!prev)} className={`w-8 h-8 ${open? "text-xl": "text-2xl"} z-101`}>
                {open? "X": "☰"}
            </button>
        </div>

        <div className={`list md:hidden fixed flex flex-col bg-[#e6e6ff] w-full h-screen top-0 ${open? "right-0 bottom-0":"-right-[100%]"} transition-all ease-in-out duration-1000 items-center justify-center gap-8 text-xl z-100`}>
            <Link to="/">Home</Link>
            <Link to="/">Trending</Link>
            <Link to="/">Most Popular</Link>
            <Link to="/">About</Link>
            <SignedOut>
            <Link to="/login"><button className='px-4 py-2 bg-blue-600 text-white rounded-full cursor-pointer'>Login 👋</button></Link>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
        
        <div className="right md:flex hidden items-center justify-between text-md gap-8">
            <Link to="/">Home</Link>
            <Link to="/">Trending</Link>
            <Link to="/">Most Popular</Link>
            <Link to="/">About</Link>
            <SignedOut>
            <Link to="/login"><button className='px-4 py-2 bg-blue-600 text-white rounded-full cursor-pointer'>Login 👋</button></Link>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    </div>
  )
}

export default Navbar