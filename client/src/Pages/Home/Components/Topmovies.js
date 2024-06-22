import React, { useState, useEffect } from 'react';
import MovieCard1 from './MovieCard1';
import { HomeMovieList } from './Data/HomeMovieList';

const Topmovies = () => {
  // Calculate average rating for each movie and add it as a new property
  const moviesWithAverageRating = HomeMovieList.map(movie => ({
    ...movie,
    averageRating: movie.ratings.reduce((acc, curr) => acc + curr, 0) / movie.ratings.length
  }));

  // Sort movies by average rating in descending order
  const sortedMovies = moviesWithAverageRating.sort((a, b) => b.averageRating - a.averageRating);

  // State for controlling the number of movies per row
  const [moviesPerRow, setMoviesPerRow] = useState(2);

  // Function to update movies per row based on screen size
  const updateMoviesPerRow = () => {
    if (window.innerWidth >= 1200) {
      setMoviesPerRow(7); // Large screens: 6 movies per row
    } else if (window.innerWidth >= 992) {
      setMoviesPerRow(6); // Medium screens: 5 movies per row
    } else if (window.innerWidth >= 768) {
      setMoviesPerRow(5); // Small screens: 4 movies per row
    } else {
      setMoviesPerRow(3); // Extra small screens: 2 movies per row
    }
  };

  // Use effect to update movies per row on initial load and on window resize
  useEffect(() => {
    updateMoviesPerRow();
    window.addEventListener('resize', updateMoviesPerRow);
    return () => {
      window.removeEventListener('resize', updateMoviesPerRow);
    };
  }, []);

  // State for controlling the current row of movies
  const [currentRow, setCurrentRow] = useState(0);

  // Calculate the total number of rows needed
  const totalRows = Math.ceil(sortedMovies.length / moviesPerRow);

  // Function to handle moving to the previous row
  const prevRow = () => {
    if (currentRow > 0) {
      setCurrentRow(currentRow - 1);
    }
  };

  // Function to handle moving to the next row
  const nextRow = () => {
    if (currentRow < totalRows - 1) {
      setCurrentRow(currentRow + 1);
    }
  };

  // Calculate the start and end index for the current row
  const startIndex = currentRow * moviesPerRow;
  const endIndex = Math.min(startIndex + moviesPerRow, sortedMovies.length);

  // Movies to display in the current row
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
            className={`absolute top-1/2 transform -translate-y-1/2 left-2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2 ${currentRow === 0 ? 'hidden' : ''}`}
            onClick={prevRow}
          >
            &lt;
          </button>
          <button
            className={`absolute top-1/2 transform -translate-y-1/2 right-2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2 ${currentRow === totalRows - 1 ? 'hidden' : ''}`}
            onClick={nextRow}
          >
            &gt;
          </button>
        </div>
      </div>
  );
}

export default Topmovies;
