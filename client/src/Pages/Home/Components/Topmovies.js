import React, { useState, useEffect } from 'react';
import MovieCard1 from './MovieCard1';
import { HomeMovieList } from './Data/HomeMovieList';

const Topmovies = () => {
  const moviesWithAverageRating = HomeMovieList.map(movie => ({
    ...movie,
    averageRating: movie.ratings.reduce((acc, curr) => acc + curr, 0) / movie.ratings.length
  }));

  const sortedMovies = moviesWithAverageRating.sort((a, b) => b.averageRating - a.averageRating);

  const [moviesPerRow, setMoviesPerRow] = useState(2);

  const updateMoviesPerRow = () => {
    if (window.innerWidth >= 1200) {
      setMoviesPerRow(7); 
    } else if (window.innerWidth >= 992) {
      setMoviesPerRow(6); 
    } else if (window.innerWidth >= 768) {
      setMoviesPerRow(5); 
    } else {
      setMoviesPerRow(3); 
    }
  };

  useEffect(() => {
    updateMoviesPerRow();
    window.addEventListener('resize', updateMoviesPerRow);
    return () => {
      window.removeEventListener('resize', updateMoviesPerRow);
    };
  }, []);

  const [currentRow, setCurrentRow] = useState(0);

  const totalRows = Math.ceil(sortedMovies.length / moviesPerRow);

  const prevRow = () => {
    if (currentRow > 0) {
      setCurrentRow(currentRow - 1);
    }
  };

  const nextRow = () => {
    if (currentRow < totalRows - 1) {
      setCurrentRow(currentRow + 1);
    }
  };

  const startIndex = currentRow * moviesPerRow;
  const endIndex = Math.min(startIndex + moviesPerRow, sortedMovies.length);

  const moviesToShow = sortedMovies.slice(startIndex, endIndex);

  return (

    <div className='bg-black flex flex-wrap'>
      <h2 className='text-2xl text-center text-[#E1E6F0] font-sans font-bold py-4 flex justify-start pl-20'>Top Rated Movies</h2>
      <div className='relative mx-auto px-4 ml-2'>
        <div className="flex ml-16 gap-4 pb-4">
          {moviesToShow.map((movie, idx) => (
            <div key={movie.id} className={`flex-none ${idx !== 0 ? 'ml-4' : ''} relative`}>
              <MovieCard1 poster={movie.poster} />
              <span className="absolute bottom-2 -left-8 bg-transparent rounded-md text-gray-300 text-8xl font-bold p-2">{startIndex + idx + 1}</span>
            </div>
          ))}


        </div>
        {/* Left Arrow */}
        <button
          className={`absolute top-24  transform -translate-y-1/2 left-16 bg-gray-800 bg-opacity-75 text-white rounded-full p-3 hover:bg-opacity-100 transition ${currentRow === 0 ? 'hidden' : ''}`}
          onClick={prevRow}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        {/* Right Arrow */}
        <button
          className={`absolute top-24 transform -translate-y-1/2 right-1 bg-gray-800 bg-opacity-75 text-white rounded-full p-3 hover:bg-opacity-100 transition ${currentRow === totalRows - 1 ? 'hidden' : ''}`}
          onClick={nextRow}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Topmovies;