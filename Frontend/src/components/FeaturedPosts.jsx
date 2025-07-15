import React from 'react'
import Img from './Img'
import { Link } from 'react-router-dom'
import { apiRequest } from '../utilities/apiRequest'
import { useQuery } from '@tanstack/react-query'
import { format } from 'timeago.js'

const FeaturedPosts = () => {
    const getPosts= async()=>{
        const response= await apiRequest.get('/posts?featured=true&limit=4&sort=newest');
        return response.data;
    }

    const { isPending, error, data } = useQuery({
    queryKey: ['featuredPosts'],
    queryFn: getPosts
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  const posts= data.posts;
  if(!posts || posts.length===0){
    return;
  }

  return (
    <div className='featuredPosts mt-8 flex flex-col lg:flex-row gap-4'>
        <div className="first flex-1">
            {posts[0].img && 
            <Img src={posts[0].img.substring('/PlainType'.length)} alt='featured post' className='w-full rounded-xl mb-2' height={580} width={900} />
            }
            <span className='font-mono font-bold text-lg'>01.</span>
            <Link className='mx-2 text-sm text-blue-600'>{posts[0].category}</Link>
            <span className='text-gray-500'>{format(posts[0].createdAt)}</span>
            <Link to='/test' className='mt-2 font-bold text-xl'><p>{posts[0].title}</p></Link>
        </div>
        <div className="others mt-8 flex-1 md:mt-0 flex flex-col gap-8 md:gap-2 mb-8 md:h-full aspect-video">
            {
                posts[1] &&
            <div className="second flex gap-4 md:h-3/7 mb-2">
            <div className="image w-1/2 h-40 md:w-1/3 md:h-full sm:h-50 flex items-center justify-center">
            {posts[1].img && 
                <Img src={posts[1].img.substring('/PlainType'.length)} alt='featured post' className='w-full h-full object-cover rounded-xl' height={210} width={356}/>
            }
            </div>
            <div className="details w-1/2 lg:w-2/3">
            <span className='font-mono font-bold text-lg'>02.</span>
            <Link className='mx-2 text-sm text-blue-600'>{posts[1].category}</Link>
            <span className='text-gray-500'>{format(posts[1].createdAt)}</span>
            <p className='text-lg font-medium'>{posts[1].title}</p>
            </div>
            </div>
            }
            {
                posts[2] && 

            <div className="second flex gap-4 md:h-3/7 mb-2">
            <div className="image w-1/2 h-40 md:w-1/3 md:h-full sm:h-50 flex items-center justify-center">
                { posts[2].img && 
                <Img src={posts[2].img.substring('/PlainType'.length)} alt='featured post' className='w-full h-full object-cover rounded-xl' height={210} width={356}/>
                }
            </div>
            <div className="details w-1/2 lg:w-2/3">
            <span className='font-mono font-bold text-lg'>03.</span>
            <Link className='mx-2 text-sm text-blue-600'>{posts[2].category}</Link>
            <span className='text-gray-500'>{format(posts[2].createdAt)}</span>
            <p className='text-lg font-medium'>{posts[2].title}</p>
            </div>
            </div>
            }
            {
                posts[3] && 

            <div className="second flex gap-4 md:h-3/7 mb-2">
            <div className="image w-1/2 h-40 md:w-1/3 md:h-full sm:h-50 flex items-center justify-center">
                { posts[3].img && 
                <Img src={posts[3].img.substring('/PlainType'.length)} alt='featured post' className='w-full h-full object-cover rounded-xl' height={210} width={356}/>
                }
            </div>
            <div className="details w-1/2 lg:w-2/3">
            <span className='font-mono font-bold text-lg'>04.</span>
            <Link className='mx-2 text-sm text-blue-600'>{posts[3].category}</Link>
            <span className='text-gray-500'>{format(posts[3].createdAt)}</span>
            <p className='text-lg font-medium'>{posts[3].title}</p>
            </div>
            </div>
            }
        </div>
    </div>
  )
}

export default FeaturedPosts