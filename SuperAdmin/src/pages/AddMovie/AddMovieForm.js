import React, { useState } from 'react';
import axios from 'axios';

const AddMovieForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [trailer, setTrailer] = useState('');
  const [description, setDescription] = useState('');
  const [genres, setGenres] = useState('');
  const [rating, setRating] = useState('');
  const [duration, setDuration] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [languages, setLanguages] = useState('');
  const [tags, setTags] = useState('');
  const [casts, setCasts] = useState([{ name: '', image: '' }]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        name,
        image,
        trailer,
        description,
        genres,
        rating,
        duration,
        releaseDate,
        languages,
        tags,
        casts
      };

      const token = localStorage.getItem('token'); // Adjust based on how you store the token

      const response = await axios.post(
        'http://localhost:8000/api/admin/movie/add',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.status === 201) {
        alert('Movie added successfully');
        onClose();
        // Redirect to home page or handle navigation as needed
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert('Movie with this name already exists');
      } else {
        console.error('Error adding movie:', error);
        alert('Error adding movie');
      }
    }
  };

  const handleCastsChange = (index, field, value) => {
    const updatedCasts = [...casts];
    updatedCasts[index][field] = value;
    setCasts(updatedCasts);
  };

  const addCast = () => {
    setCasts([...casts, { name: '', image: '' }]);
  };

  const removeCast = (index) => {
    const updatedCasts = [...casts];
    updatedCasts.splice(index, 1);
    setCasts(updatedCasts);
  };

  return (
    <div className="pt-[590px] fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-y-auto">
      <div className="bg-zinc-100 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl mb-4 font-medium">Add Movie</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="border rounded-xl w-full py-2 px-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image URL</label>
            <input
              type="text"
              className="border rounded-xl w-full py-2 px-3"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Trailer Link</label>
            <input
              type="url"
              className="border rounded-xl w-full py-2 px-3"
              value={trailer}
              onChange={(e) => setTrailer(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              className="border rounded-xl w-full py-2 px-3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Genre</label>
            <input
              type="text"
              className="border rounded-xl w-full py-2 px-3"
              value={genres}
              onChange={(e) => setGenres(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Rating</label>
            <input
              type="text"
              className="border rounded-xl w-full py-2 px-3"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Duration</label>
            <input
              type="text"
              className="border rounded-xl w-full py-2 px-3"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Release Date</label>
            <input
              type="text" // Changed type to text for string input
              className="border rounded-xl w-full py-2 px-3"
              value={releaseDate}
              onChange={(e) => setReleaseDate(e.target.value)}
              placeholder="yyyy-mm-dd" // Added placeholder
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Languages</label>
            <input
              type="text"
              className="border rounded-xl w-full py-2 px-3"
              value={languages}
              onChange={(e) => setLanguages(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Tags</label>
            <input
              type="text"
              className="border rounded-xl w-full py-2 px-3"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Cast Details</label>
            {casts.map((cast, index) => (
              <div key={index} className="mb-4 flex items-center">
                <input
                  type="text"
                  className="border rounded-xl w-1/2 py-2 px-3 mr-2"
                  placeholder="Cast Name"
                  value={cast.name}
                  onChange={(e) => handleCastsChange(index, 'name', e.target.value)}
                  required
                />
                <input
                  type="text"
                  className="border rounded w-1/2 py-2 px-3"
                  placeholder="Cast Image URL"
                  value={cast.image}
                  onChange={(e) => handleCastsChange(index, 'image', e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                  onClick={() => removeCast(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={addCast}
            >
              Add Cast
            </button>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovieForm;
