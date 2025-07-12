import React, { useState } from 'react'
import PostList from '../components/PostList'
import SideMenu from '../components/SideMenu'
import { useQuery } from '@tanstack/react-query';
import { apiRequest } from '../utilities/apiRequest';

const PostListPage = () => {
  const [open, setOpen]= useState(false);
  const getPosts= async () => {
    console.log('here');
    const response= await apiRequest.get('/posts');
    return response.data;
  }

  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: ()=> getPosts(),
  })

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  if (data) console.log(data);

  return (
    <div className='postlistpage'>
      <h1 className='text-2xl text-gray-700 mb-4'>Development Blog</h1>
      <button className='bg-blue-500 text-white block md:hidden py-1 px-4 rounded-full mb-4' onClick={()=>setOpen(prev=>!prev)}>Filter</button>
      <div className={`content flex gap-8 ${open? "flex-col-reverse md:flex-row":""}`}>
        <div className="posts">
          <PostList/>
        </div>
        <div className={`sidemenu ${open? "block":"hidden"} md:flex flex-col md:`}>
          <SideMenu/>
        </div>
      </div>
    </div>
  )
}

export default PostListPage