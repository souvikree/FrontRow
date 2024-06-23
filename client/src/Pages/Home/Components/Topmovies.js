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
    <div className='flex flex-wrap'>
      <h2 className='text-2xl ml-12 text-[#E1E6F0] font-sans font-bold'>Top Rated Movies</h2>
      <div className='relative mx-auto'>
          <div className="flex items-center overflow-x-auto gap-4 p-4 max-w-[1180px]">
            {moviesToShow.map((movie, idx) => (
              <div key={movie.id} className={`flex-none ${idx !== 0 ? 'ml-4' : ''} relative`}>
                <MovieCard1 posterurl={movie.posterurl} />
                <span className="absolute bottom-2 -left-8 bg-transparent rounded-md text-gray-300 text-8xl font-bold p-2">{startIndex + idx + 1}</span>
              </div>
            ))}
          </div>
          <button
            className={` h-28 absolute top-1/2 transform -translate-y-1/2 left-20 bg-gray-800 bg-opacity-50 text-white rounded-full p-2 ${currentRow === 0 ? 'hidden' : ''}`}
            onClick={prevRow}
          >
            &lt;
          </button>
          <button
            className={` h-28 absolute top-1/2 transform -translate-y-1/2 right-6 bg-gray-800 bg-opacity-50 text-white rounded-full p-2 ${currentRow === totalRows - 1 ? 'hidden' : ''}`}
            onClick={nextRow}
          >
            &gt;
          </button>
        </div>
      </div>
  );
}

export default Topmovies;
