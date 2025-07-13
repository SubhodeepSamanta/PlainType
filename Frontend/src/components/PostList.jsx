import React from 'react'
import Img from './Img'
import { Link } from 'react-router-dom'
import {format} from 'timeago.js'

const PostList = ({post}) => {
  return (
    <div className='PostList'>
         <div className="post lg:flex mb-4">
            {post.img &&
         <Img src={post.img.substring('/PlainType'.length)} alt='post' className='w-[100%] h-[100%] rounded-2xl mb-4 block md:hidden lg:block lg:w-4/11' width={734} height={450} />
            }
         <div className="details lg:flex lg:flex-col ml-4">
         <p className='text-lg font-medium md:text-2xl'>{post.title}</p>
            <span className='text-gray-500 flex gap-1 text-sm mt-1 mb-2 flex-wrap md:mt-4 lg:mt-2'>
                Written By
                <span className='text-blue-500'>{post.user? `${post.user.username}` : "Anonymous"}</span>
                on
                <span className='text-blue-500 block sm:inline'>{post.category}</span>
                {format(post.createdAt)}
            </span>
            <p className='text-gray-700 mb-2 md:text-lg lg:mb-1'>{post.desc}</p>
            <Link to={`/${post.slug}`} className='text-blue-500 underline'>Read More</Link>
         </div>
         </div>
    </div>
  )
}

export default PostList