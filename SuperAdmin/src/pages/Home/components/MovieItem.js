import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import YouTube from 'react-youtube';

const MovieItem = ({ movie, onDelete, onUpdate }) => {
  const { _id, title, moviePoster, trailerLink } = movie;
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDirector, setUpdatedDirector] = useState(movie.director);
  const [updatedReleaseDate, setUpdatedReleaseDate] = useState(
    new Date(movie.releaseDate).toISOString().split("T")[0]
  );
  const [updatedTrailerLink, setUpdatedTrailerLink] = useState(trailerLink);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/movies/${_id}`);
      onDelete(_id);
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  const handleUpdateClick = () => {
    setIsUpdateOpen(true);
  };

  const handleUpdateCancel = () => {
    setIsUpdateOpen(false);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedMovie = {
        ...movie,
        title: updatedTitle,
        director: updatedDirector,
        releaseDate: updatedReleaseDate,
        trailerLink: updatedTrailerLink,
      };
      await axios.put(`http://localhost:8000/movies/${_id}`, updatedMovie);
      onUpdate(updatedMovie);
      setIsUpdateOpen(false);
    } catch (error) {
      console.error("Error updating movie:", error);
    }
  };

  const getYouTubeVideoId = (url) => {
    const urlParts = url.split('v=');
    return urlParts[1] ? urlParts[1].split('&')[0] : null;
  };

  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
      mute: 1,
    },
  };

  return (
    <>
      <div className="bg-black rounded-2xl h-full overflow-hidden relative text-center p-4 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-2xl">
        <div className="text-gray-500 group-hover:scale-105 h-36 rounded-3xl">
          <div className="w-80 h-full overflow-hidden rounded-3xl relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <YouTube videoId={getYouTubeVideoId(movie.trailerLink)} opts={opts} />
            </div>
          </div>
        </div>
        <div className="group-hover:pb-10 transition-all delay-200">
          <h1 className="font-bold text-slate-50">{title}</h1>
        </div>
        <div className="flex items-center transition-all delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
          <div className="flex gap-3 text-2xl bg-gray-700 text-white p-1 hover:p-2 transition-all delay-200 rounded-full shadow-sm">
            <div className="hover:scale-110">
              <button
                className="text-sm flex align-middle bg-blue-500 text-white px-2 py-1 rounded-2xl"
                onClick={handleUpdateClick}
              >
                Update
              </button>
            </div>
            <div className="hover:scale-110">
              <button
                className="text-sm flex align-middle bg-red-500 text-white px-2 py-1 rounded-2xl"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Update Modal */}
      {isUpdateOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Update Movie</h2>
            <form onSubmit={handleUpdateSubmit} className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="updatedTitle" className="w-1/4 text-right pr-4">
                  Title:
                </label>
                <input
                  type="text"
                  id="updatedTitle"
                  value={updatedTitle}
                  onChange={(e) => setUpdatedTitle(e.target.value)}
                  className="border rounded px-3 py-2 w-3/4"
                />
              </div>
              <div className="flex items-center">
                <label htmlFor="updatedDirector" className="w-1/4 text-right pr-4">
                  Director:
                </label>
                <input
                  type="text"
                  id="updatedDirector"
                  value={updatedDirector}
                  onChange={(e) => setUpdatedDirector(e.target.value)}
                  className="border rounded px-3 py-2 w-3/4"
                />
              </div>
              <div className="flex items-center">
                <label htmlFor="updatedReleaseDate" className="w-1/4 text-right pr-4">
                  Release Date:
                </label>
                <input
                  type="date"
                  id="updatedReleaseDate"
                  value={updatedReleaseDate}
                  onChange={(e) => setUpdatedReleaseDate(e.target.value)}
                  className="border rounded px-3 py-2 w-3/4"
                />
              </div>
              <div className="flex items-center">
                <label htmlFor="updatedTrailerLink" className="w-1/4 text-right pr-4">
                  Trailer Link:
                </label>
                <input
                  type="text"
                  id="updatedTrailerLink"
                  value={updatedTrailerLink}
                  onChange={(e) => setUpdatedTrailerLink(e.target.value)}
                  className="border rounded px-3 py-2 w-3/4"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleUpdateCancel}
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default MovieItem;
