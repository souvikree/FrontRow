import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieCardContainer from './MovieCardContainer';

const Topmovies = () => {
  const [movies, setMovies] = useState([]);
  const [moviesPerRow, setMoviesPerRow] = useState(2);
  const [currentRow, setCurrentRow] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/movies/active'); 
        const moviesData = response.data;

        // Assuming moviesData structure from backend
        const sortedMovies = moviesData.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));

        setMovies(sortedMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

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

  const totalRows = Math.ceil(movies.length / moviesPerRow);

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
  const endIndex = Math.min(startIndex + moviesPerRow, movies.length);

  const moviesToShow = movies.slice(startIndex, endIndex);

  if (loading) {
    return <div className='text-white'>Loading movies...</div>;
  }

  if (error) {
    return <div className='text-white'>Error fetching movies. Please try again later.</div>;
  }

  return (
    <div className='bg-black flex flex-wrap'>
      <h2 className='text-2xl text-center text-[#E1E6F0] font-sans font-bold py-4 flex justify-start pl-20'>Available Movies</h2>
      <div className='relative mx-auto px-4 ml-10  '>
        <div className="grid gap-4 p-4 mx-auto sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 ">
          {moviesToShow.map((movie, idx) => (
            <div key={movie._id} className={`flex-none ${idx !== 0 ? 'ml-4' : ''} relative`} >
              <MovieCardContainer key={movie._id} id={movie._id} image={movie.image} />
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