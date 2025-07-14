import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { apiRequest } from '../utilities/apiRequest';
import { useAuth, useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const PostMenuInteractions = ({post}) => {
  const {getToken} = useAuth();
  const {user}= useUser();
  const getSavedPosts=async()=>{
    const token= await getToken();
    const response= await apiRequest.get(`/users/saved`,{
      header:{
        Authorization:`Bearer ${token}`
      }
    });
    return response.data;
  }
  
  
  const { isPending, error, data:savedPosts } = useQuery({
    queryKey: ['savedPosts'],
    queryFn:  getSavedPosts
  })

  const navigate= useNavigate();
  const deletePostMutation = useMutation({
      mutationFn: async () => {
        const token= await getToken();
        return apiRequest.delete(`/posts/${post._id}`,{
          headers:{
            Authorization: `Bearer ${token}`
          }
        })
      },
      onSuccess: async()=>{
        navigate('/');
      }
    })
    const queryClient = useQueryClient();
    const savePostMutation = useMutation({
      mutationFn: async () => {
        const token= await getToken();
        return apiRequest.patch(`/users/save`,{postId: post._id},{
          headers:{
            Authorization: `Bearer ${token}`
          }
        })
      },
      onSuccess: async()=>{
        queryClient.invalidateQueries({queryKey:['savedPosts']});
      }
    })

  if (isPending) return 'Loading...'
  
  if (error) return 'An error has occurred: ' + error.message;
  const isSaved= savedPosts.some(p=> p === post._id) || false;
  console.log(isSaved);
  console.log(savedPosts);

  return (
    <div>
        <div className="save flex gap-2 items-center cursor-pointer" onClick={()=> savePostMutation.mutate()}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="20px"
            height="20px"
          >
            <path
              d="M12 4C10.3 4 9 5.3 9 7v34l15-9 15 9V7c0-1.7-1.3-3-3-3H12z"
              stroke="black"
              strokeWidth="2"
              fill={isSaved ? "black" : "none"}
            />
          </svg>
          {savePostMutation.isPending
          ?
          <span className='text-sm'>In Progress...</span>
          :
          isSaved
          ?
          <span className='text-sm'>Unsave</span>
          :
          <span className='text-sm'>Save this post</span>
          }
        </div>
        {post?.user?.username === user?.username && 
        <div className="delete flex gap-2 mt-2 cursor-pointer" onClick={()=> deletePostMutation.mutate()}>
             <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            fill="red"
            width="20px"
            height="20px"
            >
            <path d="M 21 2 C 19.354545 2 18 3.3545455 18 5 L 18 7 L 10.154297 7 A 1.0001 1.0001 0 0 0 9.984375 6.9863281 A 1.0001 1.0001 0 0 0 9.8398438 7 L 8 7 A 1.0001 1.0001 0 1 0 8 9 L 9 9 L 9 45 C 9 46.645455 10.354545 48 12 48 L 38 48 C 39.645455 48 41 46.645455 41 45 L 41 9 L 42 9 A 1.0001 1.0001 0 1 0 42 7 L 40.167969 7 A 1.0001 1.0001 0 0 0 39.841797 7 L 32 7 L 32 5 C 32 3.3545455 30.645455 2 29 2 L 21 2 z M 21 4 L 29 4 C 29.554545 4 30 4.4454545 30 5 L 30 7 L 20 7 L 20 5 C 20 4.4454545 20.445455 4 21 4 z M 11 9 L 18.832031 9 A 1.0001 1.0001 0 0 0 19.158203 9 L 30.832031 9 A 1.0001 1.0001 0 0 0 31.158203 9 L 39 9 L 39 45 C 39 45.554545 38.554545 46 38 46 L 12 46 C 11.445455 46 11 45.554545 11 45 L 11 9 z M 18.984375 13.986328 A 1.0001 1.0001 0 0 0 18 15 L 18 40 A 1.0001 1.0001 0 1 0 20 40 L 20 15 A 1.0001 1.0001 0 0 0 18.984375 13.986328 z M 24.984375 13.986328 A 1.0001 1.0001 0 0 0 24 15 L 24 40 A 1.0001 1.0001 0 1 0 26 40 L 26 15 A 1.0001 1.0001 0 0 0 24.984375 13.986328 z M 30.984375 13.986328 A 1.0001 1.0001 0 0 0 30 15 L 30 40 A 1.0001 1.0001 0 1 0 32 40 L 32 15 A 1.0001 1.0001 0 0 0 30.984375 13.986328 z" />
          </svg>
          <span className='text-sm'>Delete this post</span>
        </div>
        }
    </div>
  )
}

export default PostMenuInteractions