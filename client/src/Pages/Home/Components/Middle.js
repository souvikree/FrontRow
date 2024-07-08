import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCardContainer from './MovieCardContainer';

const Middle = () => {
  const [inactiveMovies, setInactiveMovies] = useState([]);

  useEffect(() => {
    const fetchInactiveMovies = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/movies/inactive');
        setInactiveMovies(response.data);
      } catch (error) {
        console.error('Error fetching inactive movies:', error);
      }
    };

    fetchInactiveMovies();
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
        <h1 className="text-2xl ml-12 pl-6 text-[#E1E6F0] font-sans font-bold">Upcoming Movies</h1>
        <div className="grid gap-4 p-6 pl-12   mx-auto sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
          {inactiveMovies.map((movie) => (
            <MovieCardContainer key={movie._id} id={movie._id} image={movie.image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Middle;
