import React from 'react'
import Img from './Img'

const Comments = () => {
  return (
    <div className='comments mt-10 mb-4 font-medium text-xl w-full md:w-4/5'>
        <h1 className='text-blue-600 underline'>Comments</h1>
        <div className="comment-form flex gap-4 items-baseline mb-8">
        <textarea name="Comment" id="comment" placeholder='Write a comment...' className='bg-white p-2 mt-4 w-full rounded-lg text-base resize-none' ></textarea>
        <button className='bg-blue-500 text-white rounded-lg text-base font-normal py-2 px-4 cursor-pointer'>Send</button>
        </div>
        <div className="comment mt-4 bg-white p-4 rounded-lg">
            <div className="details flex items-center gap-2">
                <Img src='/userImg.jpeg' className='rounded-full' width={30} height={30} />
                <span className='text-sm text-gray-700'>John Doe</span>
                <span className='text-gray-500 text-xs'>2 days ago</span>
            </div>
            <p className='text-sm mt-2 font-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi sapiente beatae officiis perferendis quia delectus voluptatum nobis, dolore praesentium ipsa laborum suscipit eveniet atque sequi rerum, necessitatibus error? Vitae laudantium, sapiente quae commodi rerum deserunt delectus eum cum illo repudiandae.</p>
        </div>
        <div className="comment mt-4 bg-white p-4 rounded-lg">
            <div className="details flex items-center gap-2">
                <Img src='/userImg.jpeg' className='rounded-full' width={30} height={30} />
                <span className='text-sm text-gray-700'>John Doe</span>
                <span className='text-gray-500 text-xs'>2 days ago</span>
            </div>
            <p className='text-sm mt-2 font-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi sapiente beatae officiis perferendis quia delectus voluptatum nobis, dolore praesentium ipsa laborum suscipit eveniet atque sequi rerum, necessitatibus error? Vitae laudantium, sapiente quae commodi rerum deserunt delectus eum cum illo repudiandae.</p>
        </div>
        <div className="comment mt-4 bg-white p-4 rounded-lg">
            <div className="details flex items-center gap-2">
                <Img src='/userImg.jpeg' className='rounded-full' width={30} height={30} />
                <span className='text-sm text-gray-700'>John Doe</span>
                <span className='text-gray-500 text-xs'>2 days ago</span>
            </div>
            <p className='text-sm mt-2 font-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi sapiente beatae officiis perferendis quia delectus voluptatum nobis, dolore praesentium ipsa laborum suscipit eveniet atque sequi rerum, necessitatibus error? Vitae laudantium, sapiente quae commodi rerum deserunt delectus eum cum illo repudiandae.</p>
        </div>
        <div className="comment mt-4 bg-white p-4 rounded-lg">
            <div className="details flex items-center gap-2">
                <Img src='/userImg.jpeg' className='rounded-full' width={30} height={30} />
                <span className='text-sm text-gray-700'>John Doe</span>
                <span className='text-gray-500 text-xs'>2 days ago</span>
            </div>
            <p className='text-sm mt-2 font-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi sapiente beatae officiis perferendis quia delectus voluptatum nobis, dolore praesentium ipsa laborum suscipit eveniet atque sequi rerum, necessitatibus error? Vitae laudantium, sapiente quae commodi rerum deserunt delectus eum cum illo repudiandae.</p>
        </div>
        <div className="comment mt-4 bg-white p-4 rounded-lg">
            <div className="details flex items-center gap-2">
                <Img src='/userImg.jpeg' className='rounded-full' width={30} height={30} />
                <span className='text-sm text-gray-700'>John Doe</span>
                <span className='text-gray-500 text-xs'>2 days ago</span>
            </div>
            <p className='text-sm mt-2 font-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi sapiente beatae officiis perferendis quia delectus voluptatum nobis, dolore praesentium ipsa laborum suscipit eveniet atque sequi rerum, necessitatibus error? Vitae laudantium, sapiente quae commodi rerum deserunt delectus eum cum illo repudiandae.</p>
        </div>
    </div>
  )
}

export default Comments