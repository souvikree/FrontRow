import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const MovieItem = ({ movie, onDelete, onUpdate }) => {
  const { _id, name, image, trailer, releaseDate } = movie;
  console.log(movie)

  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedReleaseDate, setUpdatedReleaseDate] = useState(
    new Date(releaseDate).toISOString().split("T")[0]
  );
  const [updatedTrailer, setUpdatedTrailer] = useState(trailer);

  const handleDelete = async () => {
    try {
      await axios.delete(`https://frontrow-fy8v.onrender.com/movies/${_id}/delete`);
      onDelete(_id); // Trigger parent component's delete function
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
        name: updatedName,
        releaseDate: updatedReleaseDate,
        trailer: updatedTrailer,
      };
      await axios.put(`https://frontrow-fy8v.onrender.com/movies/${_id}`, updatedMovie);
      onUpdate(updatedMovie); // Trigger parent component's update function
      setIsUpdateOpen(false);
    } catch (error) {
      console.error("Error updating movie:", error);
    }
  };

  return (
    <>
      <div className="bg-black rounded-2xl h-full overflow-hidden relative text-center p-4 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-2xl">
        {/* Display Movie Details */}
        <div className="text-gray-500 group-hover:scale-105 h-36 rounded-3xl">
          {/* Image or Video */}
          <div className="w-80 h-full overflow-hidden rounded-3xl relative">
            {/* Example with YouTube video (commented out) */}
            {/* <div className="absolute top-0 left-0 w-full h-full">
              <YouTube videoId={getYouTubeVideoId(trailer)} opts={opts} />
            </div> */}
          </div>
        </div>
        {/* Movie Title */}
        <div className="group-hover:pb-10 transition-all delay-200">
          <h1 className="font-bold text-slate-50">{name}</h1>
        </div>
        {/* Update and Delete Buttons */}
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
              {/* Update Form Fields */}
              <div className="flex items-center">
                <label htmlFor="updatedName" className="w-1/4 text-right pr-4">
                  Name:
                </label>
                <input
                  type="text"
                  id="updatedName"
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
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
                <label htmlFor="updatedTrailer" className="w-1/4 text-right pr-4">
                  Trailer:
                </label>
                <input
                  type="text"
                  id="updatedTrailer"
                  value={updatedTrailer}
                  onChange={(e) => setUpdatedTrailer(e.target.value)}
                  className="border rounded px-3 py-2 w-3/4"
                />
              </div>
              {/* Update Form Buttons */}
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
