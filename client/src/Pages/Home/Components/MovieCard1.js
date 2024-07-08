import React, { useState, useEffect } from 'react';

const MovieCard1 = ({ movieId }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/movies/active`); 
        if (!response.ok) {
          throw new Error('Movie not found');
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return null; // or loading indicator
  }

  return (
    <div className='h-[200px] w-[150px] rounded-xl overflow-hidden border border-white mb-6 group'>
      <img src={movie.image} alt={movie.name} className='bg-cover rounded-lg' />
    </div>
  );
};

export default MovieCard1;
