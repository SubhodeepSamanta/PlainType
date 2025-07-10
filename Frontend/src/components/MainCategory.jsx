import React from 'react'
import { Link } from 'react-router-dom'

const MainCategory = () => {
  return (
    <div className='mainCategory w-full bg-white py-2 px-4 sm:px-8 flex items-center gap-4 rounded-xl md:rounded-full mt-4'>
        <div className="categories hidden flex-3 sm:flex gap-5 flex-wrap">
            <Link to='/posts' className='py-2 px-4 text-white text-sm bg-blue-800 rounded-full'>All Posts</Link>
            <Link to='/posts?cat=web-design' className='py-2 px-4 text-sm hover:bg-blue-100 rounded-full'>Web Design</Link>
            <Link to='/posts?cat=web-design' className='py-2 px-4 text-sm hover:bg-blue-100 rounded-full'>Development</Link>
            <Link to='/posts?cat=web-design' className='py-2 px-4 text-sm hover:bg-blue-100 rounded-full'>Databases</Link>
            <Link to='/posts?cat=web-design' className='py-2 px-4 text-sm hover:bg-blue-100 rounded-full'>Search Engines</Link>
            <Link to='/posts?cat=web-design' className='py-2 px-4 text-sm hover:bg-blue-100 rounded-full'>Marketing</Link>
        </div>
        <span className='font-medium hidden sm:flex'>|</span>
        <div className="search flex-1 flex gap-1 h-full bg-gray-100 p-2 rounded-full items-center px-4">
            <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="gray"
      >
        <circle cx="10.5" cy="10.5" r="7.5" />
        <line x1="16.5" y1="16.5" x2="22" y2="22" />
      </svg>
      <input type="text" className='h-fit outline-0 w-full' placeholder='Search a post...'/>
        </div>
    </div>
  )
}

export default MainCategory