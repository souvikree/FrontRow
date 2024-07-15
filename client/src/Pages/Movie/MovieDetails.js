import React, { useState, useEffect } from "react";
import axios from 'axios';
import ReactPlayer from "react-player";
import { useNavigate, useParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import IconText from "../Icons/IconText";
import { Icon } from "@iconify/react";

const defaultMovie = {
  name: "Unknown",
  languages: ["Unknown"],
  duration: 0,
  description: "No description available.",
  trailer: "",
  genres: ["Unknown"],
  id: 0,
  isActive: false,
  cast: [] // Ensure cast is initialized as an empty array
};

const MovieDetails = () => {
  const [movie, setMovie] = useState(defaultMovie);
  const [mute, setMute] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://frontrow-fy8v.onrender.com/api/movies/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const handleBookingClick = () => {
    if (movie.isActive) {
      setLoading(true);
      setTimeout(() => {
        navigate(`/booking/${id}`, { state: { movie } });
      }, 2000);
    } else {
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
        <Oval
          height={80}
          width={80}
          color="#ffffff"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-white">Error fetching movie details. Please try again later.</div>
    );
  }

  return (
    <div className="relative flex flex-col justify-start md:flex-row mt-0 h-full w-full bg-[#0c111b] rounded-lg overflow-hidden">
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white p-8 rounded-md text-center">
            <h2 className="text-3xl font-bold font-sans  mb-4">Information !</h2>
            <p className="mb-4">Bookings will be added in few days</p>
            <button
              onClick={closePopup}
              className="bg-red-700 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="w-full md:w-2/5 p-9 md:p-14 pt-10 px-[36px]">
        <h1 className="text-white text-3xl font-bold text-left">{movie.name}</h1>
        <div className="text-white text-base font-semibold mt-6 pl-2 text-left">
          {movie.languages.join(", ")} • {movie.duration}m • {movie.genres}
        </div>
        <div className="text-gray-200 mt-4 ml-2 text-left">{movie.description}</div>
        <button
          onClick={handleBookingClick}
          className="mt-7 mb-7 rounded-lg text-base flex items-center h-14 bg-red-700 hover:bg-red-600 px-6"
        >
          <IconText iconName={"openmoji:ticket"} displayText={"BOOK TICKETS"} />
        </button>
      </div>
      <div className="w-full relative">
        <ReactPlayer
          url={movie.trailer}
          playing={true}
          loop={true}
          muted={mute}
          controls={false}
          width="100%"
          height="100%"
          className="absolute top-0 left-0 pointer-events-none"
        />

        <button
          onClick={() => setMute(!mute)}
          className="absolute left-2 bottom-2 rounded-full p-2"
        >
          {mute ? (
            <Icon icon="mingcute:volume-mute-fill" width={27} color="white" />
          ) : (
            <Icon icon="octicon:unmute-16" width={27} color="white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
