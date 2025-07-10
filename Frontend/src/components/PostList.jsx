import React from 'react'
import Img from './Img'
import { Link } from 'react-router-dom'

const PostList = () => {
  return (
    <div className='PostList mt-4 md:mt-8'>
         <h1 className='text-2xl text-medium text-gray-500 mb-4 md:mt-35 lg:mt-4'>Recent Posts</h1>
         <div className="post lg:flex mb-4">
         <Img src='/postImg.jpeg' alt='post' className='w-[100%] rounded-2xl mb-4 block md:hidden lg:block lg:w-4/11' width={734}/>
         <div className="details lg:flex lg:flex-col ml-4">
         <p className='text-lg font-medium md:text-2xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero cum beatae culpa.</p>
            <span className='text-gray-500 flex gap-1 text-sm mt-1 mb-2 flex-wrap md:mt-4 lg:mt-2'>
                Written By
                <span className='text-blue-500'>John Doe</span>
                on
                <span className='text-blue-500 block sm:inline'>Web Design</span>
                2 days ago
            </span>
            <p className='text-gray-700 mb-2 md:text-lg lg:mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio numquam tenetur pariatur odit voluptates vel voluptas consectetur distinctio, aliquam officiis.</p>
            <Link to='/test' className='text-blue-500 underline'>Read More</Link>
         </div>
         </div>
         <div className="post lg:flex mb-4">
         <Img src='/postImg.jpeg' alt='post' className='w-[100%] rounded-2xl mb-4 block md:hidden lg:block lg:w-4/11' width={734}/>
         <div className="details lg:flex lg:flex-col ml-4">
         <p className='text-lg font-medium md:text-2xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero cum beatae culpa.</p>
            <span className='text-gray-500 flex gap-1 text-sm mt-1 mb-2 flex-wrap md:mt-4 lg:mt-2'>
                Written By
                <span className='text-blue-500'>John Doe</span>
                on
                <span className='text-blue-500 block sm:inline'>Web Design</span>
                2 days ago
            </span>
            <p className='text-gray-700 mb-2 md:text-lg lg:mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio numquam tenetur pariatur odit voluptates vel voluptas consectetur distinctio, aliquam officiis.</p>
            <Link to='/test' className='text-blue-500 underline'>Read More</Link>
         </div>
         </div>
         <div className="post lg:flex mb-4">
         <Img src='/postImg.jpeg' alt='post' className='w-[100%] rounded-2xl mb-4 block md:hidden lg:block lg:w-4/11' width={734}/>
         <div className="details lg:flex lg:flex-col ml-4">
         <p className='text-lg font-medium md:text-2xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero cum beatae culpa.</p>
            <span className='text-gray-500 flex gap-1 text-sm mt-1 mb-2 flex-wrap md:mt-4 lg:mt-2'>
                Written By
                <span className='text-blue-500'>John Doe</span>
                on
                <span className='text-blue-500 block sm:inline'>Web Design</span>
                2 days ago
            </span>
            <p className='text-gray-700 mb-2 md:text-lg lg:mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio numquam tenetur pariatur odit voluptates vel voluptas consectetur distinctio, aliquam officiis.</p>
            <Link to='/test' className='text-blue-500 underline'>Read More</Link>
         </div>
         </div>
         <div className="post lg:flex mb-4">
         <Img src='/postImg.jpeg' alt='post' className='w-[100%] rounded-2xl mb-4 block md:hidden lg:block lg:w-4/11' width={734}/>
         <div className="details lg:flex lg:flex-col ml-4">
         <p className='text-lg font-medium md:text-2xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero cum beatae culpa.</p>
            <span className='text-gray-500 flex gap-1 text-sm mt-1 mb-2 flex-wrap md:mt-4 lg:mt-2'>
                Written By
                <span className='text-blue-500'>John Doe</span>
                on
                <span className='text-blue-500 block sm:inline'>Web Design</span>
                2 days ago
            </span>
            <p className='text-gray-700 mb-2 md:text-lg lg:mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio numquam tenetur pariatur odit voluptates vel voluptas consectetur distinctio, aliquam officiis.</p>
            <Link to='/test' className='text-blue-500 underline'>Read More</Link>
         </div>
         </div>
         <div className="post lg:flex mb-4">
         <Img src='/postImg.jpeg' alt='post' className='w-[100%] rounded-2xl mb-4 block md:hidden lg:block lg:w-4/11' width={734}/>
         <div className="details lg:flex lg:flex-col ml-4">
         <p className='text-lg font-medium md:text-2xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero cum beatae culpa.</p>
            <span className='text-gray-500 flex gap-1 text-sm mt-1 mb-2 flex-wrap md:mt-4 lg:mt-2'>
                Written By
                <span className='text-blue-500'>John Doe</span>
                on
                <span className='text-blue-500 block sm:inline'>Web Design</span>
                2 days ago
            </span>
            <p className='text-gray-700 mb-2 md:text-lg lg:mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio numquam tenetur pariatur odit voluptates vel voluptas consectetur distinctio, aliquam officiis.</p>
            <Link to='/test' className='text-blue-500 underline'>Read More</Link>
         </div>
         </div>
         
    </div>
  )
}

export default PostList