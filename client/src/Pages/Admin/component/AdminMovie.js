import React, { useState } from 'react';
import Dashboard from './Dashboard';
import AdminTopBar from './AdminTopBar';

const AdminMovie = () => {
  const [movie, setMovie] = useState({
    name: '',
    image: '',
    description: '',
    rating: '',
    duration: '',
    releaseDate: '',
    languages: '',
    cast: [{ name: '', image: '' }],
    genres: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleCastChange = (index, e) => {
    const { name, value } = e.target;
    const updatedCast = movie.cast.map((castMember, i) =>
      i === index ? { ...castMember, [name]: value } : castMember
    );
    setMovie({ ...movie, cast: updatedCast });
  };

  const handleAddCast = () => {
    setMovie({ ...movie, cast: [...movie.cast, { name: '', image: '' }] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Movie Details:', movie);
    // Add the logic to save the movie details
  };

  return (
    <div className="min-h-screen bg-black">
      <AdminTopBar />
      <Dashboard />
      <div className=" p-12 ml-72 mx-32 my-auto justify-center min-w-screen mt-12 "> 
        <h2 className="text-2xl text-white font-bold mb-6 border-b border-red-600">Add Movie</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-black font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={movie.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border-black rounded bg-gray-200"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image URL</label>
            <input
              type="text"
              name="image"
              value={movie.image}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded bg-gray-200"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={movie.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Rating</label>
            <input
              type="number"
              name="rating"
              value={movie.rating}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
              min="0"
              max="10"
              step="0.1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Duration (in minutes)</label>
            <input
              type="number"
              name="duration"
              value={movie.duration}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
              min="0"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Release Date</label>
            <input
              type="date"
              name="releaseDate"
              value={movie.releaseDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Languages</label>
            <input
              type="text"
              name="languages"
              value={movie.languages}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Genres</label>
            <input
              type="text"
              name="genres"
              value={movie.genres}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Cast</label>
            {movie.cast.map((castMember, index) => (
              <div key={index} className="flex space-x-4 mb-2">
                <input
                  type="text"
                  name="name"
                  value={castMember.name}
                  onChange={(e) => handleCastChange(index, e)}
                  placeholder="Name"
                  className="w-1/2 px-3 py-2 border rounded"
                  required
                />
                <input
                  type="text"
                  name="image"
                  value={castMember.image}
                  onChange={(e) => handleCastChange(index, e)}
                  placeholder="Image URL"
                  className="w-1/2 px-3 py-2 border rounded"
                  required
                />
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddCast}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Add Cast Member
            </button>
          </div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
          >
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminMovie;
