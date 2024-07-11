
import React, { useState, useEffect } from 'react';


import { Icon } from '@iconify/react';
import axios from 'axios';
import MovieCardContainer from '../Home/Components/MovieCardContainer';
import noResultsImage from '../assets/noresult.gif'; // Update the path accordingly


const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      const fetchMovies = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/api/movies/name/${searchQuery}`);
          setSearchResults(response.data);
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      };

      fetchMovies();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (

    <div className='bg-black min-h-screen flex flex-col'>
      <div className="w-full p-4 mt-16 pl-28">
        <div className="relative w-full">
          <Icon icon="uil:search" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-lg" width={27} />
          <input 
            type="text" 
            className="bg-gray-900 text-white text-lg font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 py-4 pl-14" 
            placeholder="Search Movies" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            required 
          />
        </div>
      </div>
      <div className='flex-1 px-5 pb-6 pl-14 overflow-y-auto mx-10'>
        {searchResults.length > 0 ? (
          <div className='flex flex-wrap'>
            <div className="grid gap-4 p-4 mx-auto sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
              {searchResults.map((movie) => (
                <MovieCardContainer key={movie._id} id={movie._id} image={movie.image} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-20">
            <img src={noResultsImage} alt="No results found" className="h-auto w-56 rounded-full" />
            <p className="text-white mt-4"></p>
          </div>
        )}
      </div>
    </div>

  );
}

export default Search;
