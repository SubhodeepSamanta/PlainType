import React from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

const Search = () => {
  const location= useLocation();
  const navigate= useNavigate();
  const [searchParams,setSearchParams]= useSearchParams();

  const handleKeyPress= async (e)=>{
    if(e.key==="Enter"){
      const query= e.target.value;
      if(location.pathname==='/posts'){
        setSearchParams({...Object.fromEntries(searchParams) ,search:query})
      }else{
        navigate(`/posts?search?=${query}`)
      }
    }
  }

  return (
    <div className='flex bg-white rounded-full py-2 px-2 w-full items-center gap-2 '>
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
      <input type="text" placeholder='Search a post...' className='w-full h-full outline-0 bg-transparent text-sm' onKeyDown={handleKeyPress} />
    </div>
  )
}

export default Search