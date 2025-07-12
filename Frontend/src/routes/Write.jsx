import { useAuth, useUser } from '@clerk/clerk-react';
import { useMutation } from '@tanstack/react-query';
import React from 'react'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { apiRequest } from '../utilities/apiRequest';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Write = () => {

  const {getToken}= useAuth();
  const [value,setValue]= useState('');
  const navigate= useNavigate();
  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token= await getToken();
      return apiRequest.post('/posts', newPost,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
    },
    onSuccess: async(res)=>{
      navigate(`/${res.data.slug}`);
    }
  })

  const handleSubmit= async(e)=>{
    e.preventDefault();
    const formdata= new FormData(e.target);
    const data={
       title: formdata.get('title'),
       desc: formdata.get('desc'),
       category: formdata.get('category'),
       content: value
    }
    mutation.mutate(data);
  }

  const {isLoaded, isSignedIn}= useUser();

  if(!isLoaded) return 'Loading...';
  if(isLoaded && !isSignedIn) return 'Login';


  return (
    <form onSubmit={handleSubmit} className='write h-[calc(100vh-100px)] flex flex-col'>
      <h1 className='text-lg text-gray-700 mb-4'>Create a New Post</h1>
      <button className='py-2 px-4 flex items-center shadow-lg w-fit cursor-pointer bg-white text-gray-700 text-sm rounded-full'>Add a cover image</button>
      <input type="text" name='title' placeholder='My Awesome Story' className='text-4xl py-4 outline-0 font-medium' />
      <div className="category">
        <label className='text-gray-700 text-sm flex items-center mb-4' htmlFor='category'>Choose a category 
          <select name="category" id="category" className='bg-white outline-0 p-1 ml-2 rounded-lg cursor-pointer'>
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </label>
      </div>
      <textarea name='desc' id='description' className="description w-full bg-white resize-none p-2 rounded-lg outline-0" placeholder='A Short description'></textarea>
      <ReactQuill theme="snow" value={value} onChange={setValue} className='bg-white rounded-xl mt-4 flex-1 overflow-y-auto'/>
      {mutation.isError ? ( <div>An error occurred: {mutation.error.message}</div> ) : null}
      <button className='bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer w-fit mt-4 disabled:bg-blue-400 disabled:cursor-not-allowed' disabled={mutation.isPending} >{mutation.isPending? "Loading...": "Send"}</button>
    </form>
  )
}

export default Write