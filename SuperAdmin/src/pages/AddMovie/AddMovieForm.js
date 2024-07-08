import React, { useState } from 'react';
import axios from 'axios';

const AddMovieForm = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [trailerLink, setTrailerLink] = useState('');
  const [moviePoster, setMoviePoster] = useState(null);
  const [castDetails, setCastDetails] = useState([{ name: '', picture: null }]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('director', director);
      formData.append('releaseDate', releaseDate);
      formData.append('trailerLink', trailerLink);
      formData.append('moviePoster', moviePoster);

      formData.append('castDetails', JSON.stringify(castDetails.map((cast, index) => ({
        name: cast.name
      }))));

      castDetails.forEach((cast, index) => {
        formData.append(`castDetails[picture]`, cast.picture);
      });

      const response = await axios.post('http://localhost:8000/movie', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 201) {
        alert('Movie added successfully');
        onClose();
        // Redirect to home page or handle navigation as needed
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert('Movie with this title already exists');
      } else {
        console.error('Error adding movie:', error);
        alert('Error adding movie');
      }
    }
  };

  const handleMoviePosterChange = (e) => {
    setMoviePoster(e.target.files[0]);
  };

  const handleCastDetailsChange = (index, field, value) => {
    const updatedCastDetails = [...castDetails];
    updatedCastDetails[index][field] = value;
    setCastDetails(updatedCastDetails);
  };

  const addCastDetail = () => {
    setCastDetails([...castDetails, { name: '', picture: null }]);
  };

  const removeCastDetail = (index) => {
    const updatedCastDetails = [...castDetails];
    updatedCastDetails.splice(index, 1);
    setCastDetails(updatedCastDetails);
  };

  return (
    <div className="pt-96 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-y-auto">
      <div className="bg-zinc-100 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl mb-4 font-medium">Add Movie</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              className="border rounded-xl w-full py-2 px-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Director</label>
            <input
              type="text"
              className="border rounded-xl w-full py-2 px-3"
              value={director}
              onChange={(e) => setDirector(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Release Date</label>
            <input
              type="date"
              className="border rounded-xl w-full py-2 px-3"
              value={releaseDate}
              onChange={(e) => setReleaseDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Trailer Link</label>
            <input
              type="url"
              className="border rounded-xl w-full py-2 px-3"
              value={trailerLink}
              onChange={(e) => setTrailerLink(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Movie Poster</label>
            <input
              type="file"
              className="border rounded-xl w-full py-2 px-3"
              onChange={handleMoviePosterChange}
              accept="image/*"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Cast Details</label>
            {castDetails.map((cast, index) => (
              <div key={index} className="mb-4 flex items-center">
                <input
                  type="text"
                  className="border rounded-xl w-1/2 py-2 px-3 mr-2"
                  placeholder="Cast Name"
                  value={cast.name}
                  onChange={(e) => handleCastDetailsChange(index, 'name', e.target.value)}
                  required
                />
                <input
                  type="file"
                  className="border rounded w-1/2 py-2 px-3"
                  onChange={(e) => handleCastDetailsChange(index, 'picture', e.target.files[0])}
                  accept="image/*"
                  required
                />
                <button
                  type="button"
                  className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                  onClick={() => removeCastDetail(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={addCastDetail}
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
