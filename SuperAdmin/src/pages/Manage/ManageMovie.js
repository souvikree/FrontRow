import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageMovie = ({ onMovieSelect }) => {
  const [movies, setMovies] = useState([]);

  // Fetch all movies from the server on component mount
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://frontrow-fy8v.onrender.com/movies');
        console.log(response); // Adjust endpoint to fetch all movies
        setMovies(response.data.movies); // Assuming response contains array of movies
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleMovieClick = (movie) => {
    onMovieSelect(movie); // Pass selected movie data back to parent component
  };

  return (
    <div className='z-30 bg-slate-800'>
      <h1 className="text-2xl font-bold mb-4 pt-32 ">Manage Movies</h1>
      <div className="grid grid-cols-3 gap-4 z-30">
        {movies.map((movie) => (
          <div
            key={movie._id}
            className="border p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
            onClick={() => handleMovieClick(movie)}
          >
            <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
            <p className="text-gray-700 mb-2">Director: {movie.director}</p>
            <p className="text-gray-700 mb-4">Release Date: {movie.releaseDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageMovie;
