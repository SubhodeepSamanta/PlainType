import React from 'react'
import Img from '../components/Img'
import { Link } from 'react-router-dom'
import PostMenuInteractions from '../components/PostMenuInteractions'
import Search from '../components/Search'
import Comments from '../components/Comments'

const SinglePostPage = () => {
  return (
    <div>
      <div className="details flex flex-col md:flex-row mt-8 gap-4">
        <div className="text md:w-4/5">
        <h1 className='text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illo a cupiditate.</h1>
        <span className='text-gray-500 flex gap-1 text-sm mt-2 mb-2 flex-wrap md:mt-4 lg:mt-2'>
                Written By
                <span className='text-blue-500'>John Doe</span>
                on
                <span className='text-blue-500 block sm:inline'>Web Design</span>
                2 days ago
        </span>
        <p className='my-4 text-gray-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse eum voluptatibus dolores deleniti magni recusandae expedita cumque quod sapiente explicabo nisi officiis facilis, nostrum ad impedit deserunt consectetur cupiditate numquam!</p>
        </div>
        <div className="image w-[100%] md:w-2/5 rounded-xl">
        <Img src='/featured1.jpeg' alt='cover image' className='h-full w-full object-cover rounded-xl'/>
        </div>
      </div>
      <div className="content text-justify mt-8 flex flex-col md:flex-row gap-4">
        <div className="text">
          <div className="text-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cum dolorem ratione est minus odit corporis saepe, quo aperiam fugiat mollitia officiis ad incidunt aliquam porro perferendis rerum a alias enim? Fugit facere laborum cum commodi quisquam asperiores neque delectus dolores cupiditate tenetur dignissimos dolor praesentium soluta atque earum, nam tempora repudiandae, culpa ducimus accusantium! Animi beatae quisquam quidem sint ullam ipsam eius fuga modi sunt aliquam. Earum voluptate neque porro aliquam minima iure tempora quaerat, dolorem assumenda dicta beatae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cum dolorem ratione est minus odit corporis saepe, quo aperiam fugiat mollitia officiis ad incidunt aliquam porro perferendis rerum a alias enim? Fugit facere laborum cum commodi quisquam asperiores neque delectus dolores cupiditate tenetur dignissimos dolor praesentium soluta atque earum, nam tempora repudiandae, culpa ducimus accusantium! Animi beatae quisquam quidem sint ullam ipsam eius fuga modi sunt aliquam. Earum voluptate neque porro aliquam minima iure tempora quaerat, dolorem assumenda dicta beatae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cum dolorem ratione est minus odit corporis saepe, quo aperiam fugiat mollitia officiis ad incidunt aliquam porro perferendis rerum a alias enim? Fugit facere laborum cum commodi quisquam asperiores neque delectus dolores cupiditate tenetur dignissimos dolor praesentium soluta atque earum, nam tempora repudiandae, culpa ducimus accusantium! Animi beatae quisquam quidem sint ullam ipsam eius fuga modi sunt aliquam. Earum voluptate neque porro aliquam minima iure tempora quaerat, dolorem assumenda dicta beatae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cum dolorem ratione est minus odit corporis saepe, quo aperiam fugiat mollitia officiis ad incidunt aliquam porro perferendis rerum a alias enim? Fugit facere laborum cum commodi quisquam asperiores neque delectus dolores cupiditate tenetur dignissimos dolor praesentium soluta atque earum, nam tempora repudiandae, culpa ducimus accusantium! Animi beatae quisquam quidem sint ullam ipsam eius fuga modi sunt aliquam. Earum voluptate neque porro aliquam minima iure tempora quaerat, dolorem assumenda dicta beatae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cum dolorem ratione est minus odit corporis saepe, quo aperiam fugiat mollitia officiis ad incidunt aliquam porro perferendis rerum a alias enim? Fugit facere laborum cum commodi quisquam asperiores neque delectus dolores cupiditate tenetur dignissimos dolor praesentium soluta atque earum, nam tempora repudiandae, culpa ducimus accusantium! Animi beatae quisquam quidem sint ullam ipsam eius fuga modi sunt aliquam. Earum voluptate neque porro aliquam minima iure tempora quaerat, dolorem assumenda dicta beatae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cum dolorem ratione est minus odit corporis saepe, quo aperiam fugiat mollitia officiis ad incidunt aliquam porro perferendis rerum a alias enim? Fugit facere laborum cum commodi quisquam asperiores neque delectus dolores cupiditate tenetur dignissimos dolor praesentium soluta atque earum, nam tempora repudiandae, culpa ducimus accusantium! Animi beatae quisquam quidem sint ullam ipsam eius fuga modi sunt aliquam. Earum voluptate neque porro aliquam minima iure tempora quaerat, dolorem assumenda dicta beatae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cum dolorem ratione est minus odit corporis saepe, quo aperiam fugiat mollitia officiis ad incidunt aliquam porro perferendis rerum a alias enim? Fugit facere laborum cum commodi quisquam asperiores neque delectus dolores cupiditate tenetur dignissimos dolor praesentium soluta atque earum, nam tempora repudiandae, culpa ducimus accusantium! Animi beatae quisquam quidem sint ullam ipsam eius fuga modi sunt aliquam. Earum voluptate neque porro aliquam minima iure tempora quaerat, dolorem assumenda dicta beatae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cum dolorem ratione est minus odit corporis saepe, quo aperiam fugiat mollitia officiis ad incidunt aliquam porro perferendis rerum a alias enim? Fugit facere laborum cum commodi quisquam asperiores neque delectus dolores cupiditate tenetur dignissimos dolor praesentium soluta atque earum, nam tempora repudiandae, culpa ducimus accusantium! Animi beatae quisquam quidem sint ullam ipsam eius fuga modi sunt aliquam. Earum voluptate neque porro aliquam minima iure tempora quaerat, dolorem assumenda dicta beatae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cum dolorem ratione est minus odit corporis saepe, quo aperiam fugiat mollitia officiis ad incidunt aliquam porro perferendis rerum a alias enim? Fugit facere laborum cum commodi quisquam asperiores neque delectus dolores cupiditate tenetur dignissimos dolor praesentium soluta atque earum, nam tempora repudiandae, culpa ducimus accusantium! Animi beatae quisquam quidem sint ullam ipsam eius fuga modi sunt aliquam. Earum voluptate neque porro aliquam minima iure tempora quaerat, dolorem assumenda dicta beatae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cum dolorem ratione est minus odit corporis saepe, quo aperiam fugiat mollitia officiis ad incidunt aliquam porro perferendis rerum a alias enim? Fugit facere laborum cum commodi quisquam asperiores neque delectus dolores cupiditate tenetur dignissimos dolor praesentium soluta atque earum, nam tempora repudiandae, culpa ducimus accusantium! Animi beatae quisquam quidem sint ullam ipsam eius fuga modi sunt aliquam. Earum voluptate neque porro aliquam minima iure tempora quaerat, dolorem assumenda dicta beatae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cum dolorem ratione est minus odit corporis saepe, quo aperiam fugiat mollitia officiis ad incidunt aliquam porro perferendis rerum a alias enim? Fugit facere laborum cum commodi quisquam asperiores neque delectus dolores cupiditate tenetur dignissimos dolor praesentium soluta atque earum, nam tempora repudiandae, culpa ducimus accusantium! Animi beatae quisquam quidem sint ullam ipsam eius fuga modi sunt aliquam. Earum voluptate neque porro aliquam minima iure tempora quaerat, dolorem assumenda dicta beatae.
        </p>
          </div>
          <Comments/>
        </div>
        <div className="side w-full md:w-250 md:sticky top-8 h-fit">
          <p className='font-medium mb-2'>Author</p>
          <div className="author flex items-center gap-4 mb-2">
            <div className="image rounded-full object-cover">
            <Img src='/userImg.jpeg' alt='author' className='rounded-full object-cover' width={40} height={40} />
            </div>
            <p className='text-blue-500'>John Doe</p>
          </div>
          <div className="description text-gray-600 text-left text-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. At minus quam eligendi?</div>
          <Link to='/'><Img src='/facebook.svg' height={25} width={25} className='inline' /></Link>
          <Link to='/'><Img src='/instagram.svg' height={25} width={25} className='inline' /></Link>
          <div className="actions mt-4">
            <p className='font-medium mb-2'>Actions</p>
            <PostMenuInteractions/>
          </div>
          <div className="categories mt-4 flex flex-col gap-2">
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
    </div>
  )
}

export default SinglePostPage