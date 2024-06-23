import React from 'react'
import MovieCardContainer from './MovieCardContainer'; // Adjust the import path as needed
import { HomeMovieList } from './Data/HomeMovieList';

const Middle = () => {
  // Get the last 21 movies from the HomeMovieList
  const last20Movies = HomeMovieList.slice(-20,-4); // Adjusted to 21 movies

  return (
    <>
      <div>
        <div className='flex justify-start'>
        <h1 className=' ml-16 text-2xl text-[#E1E6F0] font-sans font-bold my-7'>Trending in India</h1>
        </div>
        <div className='flex justify-center ml-16' >
        <div className='flex flex-wrap mb-6'>
          {
            last20Movies.map((val, idx) => {
              return <MovieCardContainer key={idx} posterurl={val.posterurl} />
            })
          }
        </div>
        </div>
      </div>
      <div>
      </div>
    </>
  )
}

export default Middle;
