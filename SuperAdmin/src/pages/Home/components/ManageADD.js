import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddMovieForm from '../../AddMovie/AddMovieForm';
import MovieItem from './MovieItem';

const ManageADD = () => {
  const [isAddMovieFormVisible, setIsAddMovieFormVisible] = useState(false);
  const [movies, setMovies] = useState([]);
  const [showRecentMovies, setShowRecentMovies] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://frontrow-fy8v.onrender.com/api/admin/movies', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setMovies(response.data.movies || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setError('Error fetching movies');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleAddMovieClick = () => {
    setIsAddMovieFormVisible(true);
    setShowRecentMovies(false);
  };

  const handleCloseForm = () => {
    setIsAddMovieFormVisible(false);
    fetchMovies();
  };

  const handleManageMoviesClick = () => {
    setShowRecentMovies(true);
  };

  const handleCloseMovies = () => {
    setShowRecentMovies(false);
  };

  const handleDeleteMovie = async (id) => {
    try {
      await axios.delete(`https://frontrow-fy8v.onrender.com/admin/movies/${id}/delete`);
      setMovies(movies.filter((movie) => movie._id !== id));
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  const handleUpdateMovie = (updatedMovie) => {
    setMovies(movies.map((movie) => (movie._id === updatedMovie._id ? updatedMovie : movie)));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-20">
        {/* Add Movie Button */}
        <button
          className="hover:bg-red-300 group p-3 bg-green-400 rounded-xl mb-3 font-bold text-lg text-gray-800 flex justify-end align-middle"
          onClick={handleAddMovieClick}
        >
          <h1 className="mx-10 mt-0 mr-20">Add movies</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            className="size-8 font-bold animate-bounce group cursor-pointer outline-none group-hover:rotate-90 stroke-neutral-950 fill-none group-hover:fill-green-400 group-active:stroke-red-200 group-active:fill-red-600 group-active:duration-0 duration-300"
          >
            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" className="stroke-green-500" />
            <path d="M8 12H16" />
            <path d="M12 16V8" />
          </svg>
        </button>

        <button
          className="hover:bg-red-300 group p-3 bg-indigo-200 rounded-xl mb-3 font-bold text-lg text-gray-800 flex justify-end align-middle"
          onClick={handleManageMoviesClick}
        >
          <h1 className="mx-10 mt-0 mr-16">Manage movies</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8 animate-bounce mt-2"
          >
            <path d="M6 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 1 1 1.5 0v7.5A.75.75 0 0 1 6 12ZM18 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 18 12ZM6.75 20.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM18.75 18.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0ZM12.75 5.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM12 21a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 12 21ZM3.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM12 11.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM15.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Z" />
          </svg>
        </button>
      </div>

      {/* Add Movie Form */}
      {isAddMovieFormVisible && <AddMovieForm onClose={handleCloseForm} />}

      {/* Manage Movies List */}
      {showRecentMovies && (
        <div className="fixed inset-0 bg-transparent  flex justify-center items-center pt-12 overflow-y-auto ">
          <div className="bg-slate-600 p-8 rounded-lg shadow-lg w-3/4 backdrop-blur-3xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white ">Manage Movies</h2>
              <button
                className="bg-red-500 text-white rounded-full p-2 hover:bg-red-700"
                onClick={handleCloseMovies}
              >
                Close
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {movies.length > 0 ? (
                movies.map((movie) => (
                  <MovieItem
                    key={movie._id}
                    movie={movie} 
                    onDelete={handleDeleteMovie}
                    onUpdate={handleUpdateMovie}
                  />
                ))
              ) : (
                <div>No movies found.</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageADD;
