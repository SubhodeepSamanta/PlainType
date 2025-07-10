import React from 'react'
import Img from './Img'
import { Link } from 'react-router-dom'

const FeaturedPosts = () => {
  return (
    <div className='featuredPosts mt-8 flex flex-col lg:flex-row gap-4'>
        <div className="first flex-1">
            <Img src='/featured1.jpeg' alt='featured post' className='w-full rounded-xl mb-2' width={956} />
            <span className='font-mono font-bold text-lg'>01.</span>
            <Link className='mx-2 text-sm text-blue-600'>Web Design</Link>
            <span className='text-gray-500'>2 Days ago</span>
            <Link to='/test' className='mt-2 font-bold text-xl'><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p></Link>
        </div>
        <div className="others mt-8 flex-1 md:mt-0 flex flex-col gap-8 md:gap-2 mb-8 md:h-full aspect-video">
            <div className="second flex gap-4 md:h-3/7">
            <div className="image w-1/2 h-40 md:w-1/3 md:h-full sm:h-50 flex items-center justify-center">
                <Img src='/featured2.jpeg' alt='featured post' className='w-full h-full object-cover rounded-xl' width={356}/>
            </div>
            <div className="details w-1/2 lg:w-2/3">
            <span className='font-mono font-bold text-lg'>02.</span>
            <Link className='mx-2 text-sm text-blue-600'>Web Design</Link>
            <span className='text-gray-500'>2 Days ago</span>
            <p className='text-lg font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            </div>
            <div className="second flex gap-4 md:h-3/7">
            <div className="image w-1/2 h-40 md:w-1/3 md:h-full sm:h-50 flex items-center justify-center">
                <Img src='/featured3.jpeg' alt='featured post' className='w-full h-full object-cover rounded-xl' width={356}/>
            </div>
            <div className="details w-1/2 lg:w-2/3">
            <span className='font-mono font-bold text-lg'>03.</span>
            <Link className='mx-2 text-sm text-blue-600'>Web Design</Link>
            <span className='text-gray-500'>2 Days ago</span>
            <p className='text-lg font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            </div>
            <div className="second flex gap-4 md:h-3/7">
            <div className="image w-1/2 h-40 md:w-1/3 md:h-full sm:h-50 flex items-center justify-center">
                <Img src='/featured4.jpeg' alt='featured post' className='w-full h-full object-cover rounded-xl' width={356}/>
            </div>
            <div className="details w-1/2 lg-w-2/3">
            <span className='font-mono font-bold text-lg'>04.</span>
            <Link className='mx-2 text-sm text-blue-600'>Web Design</Link>
            <span className='text-gray-500'>2 Days ago</span>
            <p className='text-lg font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedPosts