import React from 'react'
import Img from '../components/Img'
import { Link, useParams } from 'react-router-dom'
import PostMenuInteractions from '../components/PostMenuInteractions'
import Search from '../components/Search'
import Comments from '../components/Comments'
import { useQuery } from '@tanstack/react-query'
import { apiRequest } from '../utilities/apiRequest'
import { format } from 'timeago.js'
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css';
import { useUser } from '@clerk/clerk-react'

const SinglePostPage = () => {

  const {slug}= useParams();

  const getPost=async()=>{
    const response= await apiRequest.get(`/posts/${slug}`);
    return response.data;
  }
  
  const { isPending, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: getPost
  })

  const {user}= useUser();

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  if(!data) return "No Post Found"


  return (
    <div>
      <div className="details flex flex-col md:flex-row mt-8 gap-4">
        <div className="text md:w-4/5">
        <h1 className='text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl mb-4'>{data.title}</h1>
        <span className='text-gray-500 flex gap-1 text-sm mt-2 mb-2 flex-wrap md:mt-4 lg:mt-2'>
                Written By
                <span className='text-blue-500'>{data?.user?.username}</span>
                on
                <span className='text-blue-500 block sm:inline'>{data.category}</span>
                {format(data.createdAt)}
        </span>
        <p className='my-4 text-gray-800'>{data.desc}</p>
        </div>
        <div className="image w-[100%] h-[16rem] md:w-2/5 rounded-xl">
        {data.img && 
      <Img src={data?.img?.substring('/PlainType'.length)} alt='cover image' className='h-full w-full object-cover rounded-xl'/>
        }  
      </div>
      </div>
      <div className="content text-justify mt-8 flex flex-col md:flex-row gap-4">
        <div className="text  w-[100%]">
          <div className="text-content w-[100%]">
            <ReactQuill value={data.content} readOnly={true} modules={{toolbar:false}} />
          </div>
        </div>
        <div className="side w-full md:w-70 md:sticky top-8 right-0 h-fit">
          <p className='font-medium mb-2'>Author</p>
          <div className="author flex items-center gap-4 mb-2">
            <div className="image rounded-full object-cover">
            <Img src={data?.user?.img} alt='author' className='rounded-full object-cover' width={40} height={40} />
            </div>
            <p className='text-blue-500'>{data?.user?.username}</p>
          </div>
          <div className="description text-gray-600 text-left text-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. At minus quam eligendi?</div>
          <Link to='/'><Img src='/facebook.svg' height={25} width={25} className='inline' /></Link>
          <Link to='/'><Img src='/instagram.svg' height={25} width={25} className='inline' /></Link>
          <div className="actions mt-4">
            <p className='font-medium mb-2'>Actions</p>
            {user ? 
            <PostMenuInteractions post={data}/>
            : <span>Login to Interact with this post</span>
            }
          </div>
          <div className="categories mt-4 flex flex-col gap-2 mb-2">
            <p className='font-medium mb-2'>Categories</p>
            <Link to='/' className='underline text-sm text-blue-600'>All</Link>
            <Link to='/' className='underline text-sm text-blue-600'>Web Design</Link>
            <Link to='/' className='underline text-sm text-blue-600'>Development</Link>
            <Link to='/' className='underline text-sm text-blue-600'>Databases</Link>
            <Link to='/' className='underline text-sm text-blue-600'>Search Engines</Link>
            <Link to='/' className='underline text-sm text-blue-600'>Marketing</Link>
          </div>
          <Search/>
        </div>
      </div>
        <Comments postId={data._id} />
    </div>
  )
}

export default SinglePostPage