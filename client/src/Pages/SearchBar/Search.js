import React from 'react';
import TagBar from './TagBar';
import Middle from '../Home/Components/Middle';

const Search = () => {
  return (
    <>
      <div className="flex bg-black w-full p-4">
        <input 
          type="text" 
          className="mt-10 ml-20 mr-10 bg-gray-800 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex-grow p-2.5" 
          placeholder="Search Movies" 
          required 
        />
      </div>
      <div>
        <TagBar />
      </div>
      <div className='bg-black'>
        <Middle/>
      </div>
      
    </>
  );
}

export default Search;
