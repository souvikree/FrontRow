import React from 'react';

const Search = () => {
  return (
    <div className="flex justify-center mt-4">
      <input 
        type="text" 
        className="bg-gray-950 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 max-w-xl p-2.5" 
        placeholder="Search Movies" 
        required 
      />
    </div>
  );
}

export default Search;
