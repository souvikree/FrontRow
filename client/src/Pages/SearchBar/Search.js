import React from 'react';
import Catagory from './Catagory';

const Search = () => {
  return (
    <>
    <div className='bg-black'>
      <div className="flex w-full p-4 mt-7">
        <input 
          type="text" 
          className="mt-10 ml-20 mr-10 bg-gray-800 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex-grow p-2.5 py-4" 
          placeholder="Search Movies" 
          required 
        />
      </div>
      <div className='px-5 pb-6 overflow-y-auto mx-10'>
        <Catagory/>
        </div>
      </div>
    </>
  );
}

export default Search;
