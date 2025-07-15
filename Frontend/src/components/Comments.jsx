import React from 'react'
import Img from './Img'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '../utilities/apiRequest';
import { format } from 'timeago.js';
import { useAuth, useUser } from '@clerk/clerk-react';

const Comments = ({postId}) => {
  
  
  const getComments=async()=>{
    const response= await apiRequest.get(`/comments/${postId}`);
    return response.data;
  }
  
  const { isPending, error, data } = useQuery({
    queryKey: ['comments',postId],
    queryFn: getComments
  })

  const {getToken}= useAuth();
  const queryClient = useQueryClient();
  const mutation = useMutation({
      mutationFn: async (newPost) => {
        const token= await getToken();
        return apiRequest.post(`/comments/${postId}`, newPost,{
          headers:{
            Authorization: `Bearer ${token}`
          }
        })
      },
      onSuccess: async()=>{
        queryClient.invalidateQueries({queryKey:['comments',postId]});
      }
    })
  
    const deleteCommentMutation = useMutation({
      mutationFn: async (commentId) => {
        const token= await getToken();
        return apiRequest.delete(`/comments/${commentId}`,{
          headers:{
            Authorization: `Bearer ${token}`
          }
        })
      },
      onSuccess: async()=>{
        queryClient.invalidateQueries({queryKey:['comments',postId]});
      }
    })

    const handleSubmit= async(e)=>{
      e.preventDefault();
      const formdata= new FormData(e.target);
      const data={
         desc: formdata.get('desc')
        }
        e.target.reset();
      mutation.mutate(data);
    }
    const {user} = useUser(); 
    const isAdmin= user?.publicMetadata?.role==="admin";


    if (isPending) return 'Loading...'
  
  if (error) return 'An error has occurred: ' + error.message
  
  return (
    <div className='comments mt-10 mb-4 font-medium text-xl w-full md:w-4/5'>
        <h1 className='text-blue-600 underline'>Comments</h1>
        <form onSubmit={handleSubmit} className="comment-form flex gap-4 items-baseline mb-8">
        <textarea name="desc" id="comment" placeholder='Write a comment...' className='bg-white p-2 mt-4 w-full rounded-lg text-base resize-none' ></textarea>
        <button className='bg-blue-500 text-white rounded-lg text-base font-normal py-2 px-4 cursor-pointer'>Send</button>
        </form>
          {mutation.isPending && 
          <div className="comment mt-4 bg-white p-4 rounded-lg">
            <div className="details flex items-center gap-2">
                <span className='text-sm text-gray-700'>{user.username}</span>
                <span className='text-gray-500 text-xs'>{format(new Date().toLocaleString())}</span>
            </div>
            <p className='text-sm mt-2 font-normal'>{mutation.variables.desc} (Sending...)</p>
        </div>  
          }
          {data.map((comment)=>{
          return(
        <div key={comment._id} className="comment mt-4 bg-white p-4 rounded-lg">
            <div className="details flex items-center gap-2">
              {comment.user.img && 
                <Img src={comment.user?.img} className='rounded-full' width={30} height={30} />
              }
                <span className='text-sm text-gray-700'>{comment.user?.username}</span>
                <span className='text-gray-500 text-xs'>{format(comment.createdAt)}</span>
                {((user?.username === comment.user?.username) || isAdmin) && <span className='cursor-pointer' onClick={()=>deleteCommentMutation.mutate(comment._id)} ><Img src='/delete.svg' width={15} /></span> }
            </div>
            <p className='text-sm mt-2 font-normal'>{comment.desc}</p>
        </div>
          )})}
    </div>
  )
}

export default Comments