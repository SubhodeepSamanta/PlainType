import React from 'react'

const Write = () => {
  return (
    <div className='write'>
      <h1 className='text-lg text-gray-700 mb-4'>Create a New Post</h1>
      <button className='py-2 px-4 flex items-center shadow-lg cursor-pointer bg-white text-gray-700 text-sm rounded-full'>Add a cover image</button>
      <input type="text" placeholder='My Awesome Story' className='text-4xl py-4 outline-0 font-medium' />
      <div className="category">
        <label className='text-gray-700 text-sm flex items-center' htmlFor='category'>Choose a category 
          <select name="category" id="category" className='bg-white outline-0 p-1 ml-2 rounded-lg cursor-pointer mb-4'>
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </label>
      </div>
      <textarea name='description' id='description' className="description w-full bg-white resize-none p-2 rounded-lg outline-0" placeholder='A Short description'></textarea>
    </div>
  )
}

export default Write