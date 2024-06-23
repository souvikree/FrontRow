import React from 'react'
import MovieCardContainer from './MovieCardContainer'; // Adjust the import path as needed
import { HomeMovieList } from './Data/HomeMovieList';

const Middle = () => {
  // Get the last 21 movies from the HomeMovieList
  const last20Movies = HomeMovieList.slice(-20,-6); // Adjusted to 21 movies

  return (
    <>
      <div className='flex flex-wrap'>
        <h1 className='text-2xl ml-12 text-[#E1E6F0] font-sans font-bold'>Trending in India</h1>
        <div className='grid gap-4 p-4 mx-auto sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8'>
          {
            last20Movies.map((val, idx) => {
              return <MovieCardContainer key={idx} posterurl={val.posterurl} />
            })
          }
        </div>
      </div>
      <div>
      </div>
    </>
  )
}

export default Middle;
