import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const MainCategory = () => {
  return (
    <div className='mainCategory w-full bg-white py-2 px-4 sm:px-8 flex items-center gap-4 rounded-xl md:rounded-full mt-4'>
        <div className="categories hidden flex-3 sm:flex gap-5 flex-wrap">
            <Link to='/posts' className='py-2 px-4 text-white text-sm bg-blue-800 rounded-full'>All Posts</Link>
            <Link to='/posts?cat=web-design' className='py-2 px-4 text-sm hover:bg-blue-100 rounded-full'>Web Design</Link>
            <Link to='/posts?cat=development' className='py-2 px-4 text-sm hover:bg-blue-100 rounded-full'>Development</Link>
            <Link to='/posts?cat=databases' className='py-2 px-4 text-sm hover:bg-blue-100 rounded-full'>Databases</Link>
            <Link to='/posts?cat=seo' className='py-2 px-4 text-sm hover:bg-blue-100 rounded-full'>Search Engines</Link>
            <Link to='/posts?cat=marketing' className='py-2 px-4 text-sm hover:bg-blue-100 rounded-full'>Marketing</Link>
        </div>
        <span className='font-medium hidden sm:flex'>|</span>
        <div className="search flex-1 flex gap-1 h-full p-2 bg-gray-100 rounded-full items-center">
          <Search/>
        </div>
    </div>
  )
}

export default MainCategory