import React, { useState, useEffect } from 'react';
import { HomeMovieList } from '../Home/Components/Data/HomeMovieList';
import MovieCard1 from '../Home/Components/MovieCard1';
  


const Catagory = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredMovies, setFilteredMovies] = useState(HomeMovieList);

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
    if (selectedCategory === 'All') {
      setFilteredMovies(HomeMovieList.slice(-17));
    } else {
      setFilteredMovies(HomeMovieList.filter(movie => movie.genres.includes(selectedCategory)));
    }
  }, [selectedCategory]);

  return (
    <div>
      <div className="grid gap-4 pl-12 p-4 mx-auto sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
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
      <div className='flex flex-wrap'>
      <div className="grid gap-4 p-4 mx-auto sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
        {filteredMovies.map(movie => (
          <MovieCard1 key={movie.id} poster={movie.poster} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Catagory;
