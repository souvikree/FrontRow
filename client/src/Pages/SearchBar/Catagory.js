import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCardContainer from '../Home/Components/MovieCardContainer';

const Catagory = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredMovies, setFilteredMovies] = useState([]);

  const categories = [
    'All',
    'Thriller',
    'Sci-Fi',
    'Horror',
    'Comedy',
    'Romance',
    'Crime',
  ];

  useEffect(() => {
    const fetchMoviesByCategory = async () => {
      try {
        let response;
        if (selectedCategory === 'All') {
          response = await axios.get('https://frontrow-fy8v.onrender.com/api/movies');
        } else {
          response = await axios.get(`https://frontrow-fy8v.onrender.com/api/movies/genre/${selectedCategory}`);
        }
        setFilteredMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies by genre:', error);
        setFilteredMovies([]);
      }
    };

    fetchMoviesByCategory();
  }, [selectedCategory]);

  return (
    <div className='bg-black pt-16 min-h-screen flex flex-col gap-2'>
      <div className="flex justify-center pt-4">
        <h1 className="text-4xl font-bold text-red-600 shadow-lg">Movies</h1>
      </div>
      <div className="grid gap-4 pl-24 p-4 mx-auto sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
        {categories.map(category => (
          <button
            key={category}
            className={`text-gray-300 hover:text-red-600 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-2xl py-2 px-6 shadow hover:shadow-red-600 duration-700 ${selectedCategory === category ? 'text-red-600' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className='flex-1 w-full pl-24 flex flex-col items-center'>
        {filteredMovies.length > 0 ? (
          <div className="grid gap-4 p-4 w-full mx-auto sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
            {filteredMovies.map((movie) => (
              <MovieCardContainer key={movie._id} id={movie._id} image={movie.image} />
            ))}
          </div>
        ) : (
          <div className="text-center text-white flex flex-col items-center mt-20">
            <svg
              className="w-20 h-20 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 17v2a4 4 0 0 0 8 0v-2M9 11a4 4 0 0 1 8 0m-8 4v1a4 4 0 0 0 8 0v-1m-4-8h.01M4 15h16M4 19h16M4 10h16M4 6h16"
              />
            </svg>
            <p className="text-xl font-semibold mt-4">No movies found</p>
            <p className="text-gray-400">Try selecting a different category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catagory;
