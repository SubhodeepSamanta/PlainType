import React from 'react'
import Img from './Img'
import { Link } from 'react-router-dom'
import { apiRequest } from '../utilities/apiRequest'
import { useQuery } from '@tanstack/react-query'
import { format } from 'timeago.js'

const FeaturedPosts = () => {
    const getPosts= async()=>{
        const response= await apiRequest.get('/posts?featured=true&limit=4&sort=popular');
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
      <Link to={`/${posts[0].slug}`}>
        {posts[0].img && 
          <Img src={posts[0].img.substring('/PlainType'.length)} alt='featured post' className='w-full rounded-xl mb-2' height={580} width={900} />
        }
        <span className='font-mono font-bold text-lg'>01.</span>
        <Link className='mx-2 text-blue-600'>{posts[0].category}</Link>
        <span className='text-gray-500 text-sm'>{format(posts[0].createdAt)}</span>
        <Link to={`/${posts[0].slug}`} className='mt-2 font-bold text-xl'><p>{posts[0].title}</p></Link>
      </Link>
    </div>
    
    <div className="others mt-8 flex-1 md:mt-0 flex flex-col gap-4 mb-8">
      {posts[1] &&
        <div className="second flex gap-4 h-32 md:h-36">
          <div className="image w-1/3 h-full flex items-center justify-center">
            {posts[1].img && 
              <Img src={posts[1].img.substring('/PlainType'.length)} alt='featured post' className='w-full h-full object-cover rounded-xl' height={210} width={356}/>
            }
          </div>
          <Link to={`/${posts[1].slug}`} className="details flex-1">
            <div>
              <span className='font-mono font-bold text-lg'>02.</span>
              <Link className='mx-2 text-sm text-blue-600'>{posts[1].category}</Link>
              <span className='text-gray-500 text-sm'>{format(posts[1].createdAt)}</span>
              <p className='text-lg font-medium line-clamp-2'>{posts[1].title}</p>
            </div>
          </Link>
        </div>
      }
      
      {posts[2] && 
        <div className="second flex gap-4 h-32 md:h-36">
          <div className="image w-1/3 h-full flex items-center justify-center">
            {posts[2].img && 
              <Img src={posts[2].img.substring('/PlainType'.length)} alt='featured post' className='w-full h-full object-cover rounded-xl' height={210} width={356}/>
            }
          </div>
          <Link to={`/${posts[2].slug}`} className="details flex-1">
            <div>
              <span className='font-mono font-bold text-lg'>03.</span>
              <Link className='mx-2 text-sm text-blue-600'>{posts[2].category}</Link>
              <span className='text-gray-500 text-sm'>{format(posts[2].createdAt)}</span>
              <p className='text-lg font-medium line-clamp-2'>{posts[2].title}</p>
            </div>
          </Link>
        </div>
      }
      
      {posts[3] && 
        <div className="second flex gap-4 h-32 md:h-36">
          <div className="image w-1/3 h-full flex items-center justify-center">
            {posts[3].img && 
              <Img src={posts[3].img.substring('/PlainType'.length)} alt='featured post' className='w-full h-full object-cover rounded-xl' height={210} width={356}/>
            }
          </div>
          <Link to={`/${posts[3].slug}`} className="details flex-1">
            <div>
              <span className='font-mono font-bold text-lg'>04.</span>
              <Link className='mx-2 text-sm text-blue-600'>{posts[3].category}</Link>
              <span className='text-gray-500 text-sm'>{format(posts[3].createdAt)}</span>
              <p className='text-lg font-medium line-clamp-2'>{posts[3].title}</p>
            </div>
          </Link>
        </div>
      }
    </div>
  </div>
)
}

export default FeaturedPosts