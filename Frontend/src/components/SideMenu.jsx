import React from 'react'
import Search from './Search'
import { Link, useSearchParams } from 'react-router-dom'

const SideMenu = () => {
    const [searchParams,setSearchParams]= useSearchParams();
    const handleFilterChange= async(e)=>{
        if(searchParams.get("sort")!==e.target.value){
            setSearchParams({...Object.fromEntries(searchParams.entries()), sort: e.target.value})
        }
    }
    const handleCategoryChange= (category)=>{
        if(searchParams.get("sort")!==category){
            setSearchParams({...Object.fromEntries(searchParams.entries()), cat: category})
        }
    }
  return (
    <div>
        <div className="search mb-4 md:w-50 lg:w-60">
        <h1 className='font-medium mb-2'>Search</h1>
        <Search/>
        </div>
        <div className="filters flex flex-col gap-2 text-sm mt-8">
            <h1 className='font-medium text-base'>Filter</h1>
            <label htmlFor="newest" className='flex items-center gap-1 cursor-pointer'>
                <input type="radio" id='newest' name='filter' onChange={handleFilterChange} value='newest' className='appearance-none w-4 h-4 border-[1px] border-blue-700 cursor-pointer rounded-sm checked:bg-blue-200'/>
                Newest
            </label>
            <label htmlFor="popular" className='flex items-center gap-1 cursor-pointer'>
            <input type="radio" id='popular' name='filter' onChange={handleFilterChange} value='popular' className='appearance-none w-4 h-4 border-[1px] border-blue-700 cursor-pointer rounded-sm checked:bg-blue-200' />
                Most Popular
            </label>
            <label htmlFor="trending" className='flex items-center gap-1 cursor-pointer'>
            <input type="radio" id='trending' name='filter' onChange={handleFilterChange} value='trending' className='appearance-none w-4 h-4 border-[1px] border-blue-700 cursor-pointer rounded-sm checked:bg-blue-200' />
                Trending
            </label>
            <label htmlFor="oldest" className='flex items-center gap-1 cursor-pointer'>
            <input type="radio" id='oldest' name='filter' onChange={handleFilterChange} value='oldest' className='appearance-none w-4 h-4 border-[1px] border-blue-700 cursor-pointer rounded-sm checked:bg-blue-200' />
                Oldest
            </label>
        </div>
        <div className="category flex flex-col gap-2">
            <h1 className='font-medium mt-8'>Categories</h1>
            <span  className='underline text-sm text-blue-600 cursor-pointer' onClick={()=>handleCategoryChange("general")}>All</span>
            <span  className='underline text-sm text-blue-600 cursor-pointer' onClick={()=>handleCategoryChange("web-design")}>Web Design</span>
            <span  className='underline text-sm text-blue-600 cursor-pointer' onClick={()=>handleCategoryChange("development")}>Development</span>
            <span  className='underline text-sm text-blue-600 cursor-pointer' onClick={()=>handleCategoryChange("databases")}>Databases</span>
            <span  className='underline text-sm text-blue-600 cursor-pointer' onClick={()=>handleCategoryChange("seo")}>Search Engines</span>
            <span  className='underline text-sm text-blue-600 cursor-pointer' onClick={()=>handleCategoryChange("marketing")}>Marketing</span>
        </div>
    </div>
  )
}

export default SideMenu