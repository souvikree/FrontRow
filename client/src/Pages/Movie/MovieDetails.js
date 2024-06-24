import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import ReactPlayer from "react-player";
import { Link, useNavigate } from "react-router-dom";
import IconText from "../Icons/IconText";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Oval } from "react-loader-spinner";

const defaultMovie = {
  name: "Unknown",
  lang: "Unknown",
  duration: 0,
  desc: "No description available.",
  trailer: "",
  id: 0,
};

const MovieDetails = ({ movie = defaultMovie }) => {
  const [mute, setMute] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleBookingClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate(`/booking/${movie.id}`);
    }, 2000); // Simulate loading time, adjust the duration as needed
  };

  return (
    <div className="relative flex flex-col justify-start md:flex-row mt-0 h-full w-full bg-[#0c111b] rounded-lg overflow-hidden">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <Oval
            height={80}
            width={80}
            color="#ffffff"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      )}
      <div className="w-full md:w-2/5 p-9 md:p-14 pt-10 px-[36px]">
        <h1 className="text-white text-3xl font-bold text-left">{movie.name}</h1>
        <div className="text-white text-base font-semibold mt-6 pl-2 text-left">
          {movie.lang1} • {movie.duration}m • {movie.genres}
        </div>
        <div className="text-gray-200 mt-4 ml-2 text-left">{movie.desc}</div>
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
