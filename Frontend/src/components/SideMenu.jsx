import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

const SideMenu = () => {
  return (
    <div>
        <div className="search mb-4 md:w-50 lg:w-60">
        <h1 className='font-medium mb-2'>Search</h1>
        <Search/>
        </div>
        <div className="filters flex flex-col gap-2 text-sm mt-8">
            <h1 className='font-medium text-base'>Filter</h1>
            <label htmlFor="newest" className='flex items-center gap-1 cursor-pointer'>
                <input type="radio" id='newest' name='filter' value='newest' className='appearance-none w-4 h-4 border-[1px] border-blue-700 cursor-pointer rounded-sm checked:bg-blue-200'/>
                Newest
            </label>
            <label htmlFor="popular" className='flex items-center gap-1 cursor-pointer'>
            <input type="radio" id='popular' name='filter' value='popular' className='appearance-none w-4 h-4 border-[1px] border-blue-700 cursor-pointer rounded-sm checked:bg-blue-200' />
                Most Popular
            </label>
            <label htmlFor="trending" className='flex items-center gap-1 cursor-pointer'>
            <input type="radio" id='trending' name='filter' value='trending' className='appearance-none w-4 h-4 border-[1px] border-blue-700 cursor-pointer rounded-sm checked:bg-blue-200' />
                Trending
            </label>
            <label htmlFor="oldest" className='flex items-center gap-1 cursor-pointer'>
            <input type="radio" id='oldest' name='filter' value='oldest' className='appearance-none w-4 h-4 border-[1px] border-blue-700 cursor-pointer rounded-sm checked:bg-blue-200' />
                Oldest
            </label>
        </div>
        <div className="category flex flex-col gap-2">
            <h1 className='font-medium mt-8'>Categories</h1>
            <Link to='/' className='underline text-sm text-blue-600'>All</Link>
            <Link to='/' className='underline text-sm text-blue-600'>Web Design</Link>
            <Link to='/' className='underline text-sm text-blue-600'>Development</Link>
            <Link to='/' className='underline text-sm text-blue-600'>Databases</Link>
            <Link to='/' className='underline text-sm text-blue-600'>Search Engines</Link>
            <Link to='/' className='underline text-sm text-blue-600'>Marketing</Link>
        </div>
    </div>
  )
}

export default SideMenu