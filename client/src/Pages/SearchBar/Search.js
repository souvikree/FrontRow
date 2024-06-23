import React from 'react';

import { Icon } from '@iconify/react';


import Catagory from '../Home/Components/Catagory';


const Search = () => {
  return (
    <>
      <div className='bg-black mt-16 '>
        <div className="w-full p-4 mt-7 pl-28">
          <div className="relative w-full">
            <Icon icon="uil:search" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-lg" width={27} />
            <input 
              type="text" 
              className="bg-gray-900 text-white text-lg font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 py-4 pl-14" 
              placeholder="Search Movies" 
              required 
            />
          </div>
        </div>
        <div className='px-5 pb-6 overflow-y-auto mx-10'>
          <Catagory />
        </div>
      </div>
    </>
  );
}

export default Search;
