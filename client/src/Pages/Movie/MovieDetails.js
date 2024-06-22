import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import IconText from "../Icons/IconText";
import { Icon } from "@iconify/react/dist/iconify.js";

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

  return (
    
    <div className="flex flex-col justify-start md:flex-row mt-0 h-full w-full bg-[#0c111b] rounded-lg overflow-hidden ">
      <div className="w-full md:w-2/5 p-9 md:p-14 pt-10 px-[36px]">
        <h1 className="text-white text-3xl font-bold text-left">{movie.name}</h1>
        <div className="text-white text-base font-semibold mt-6 pl-2 text-left">
          {movie.lang1} • {movie.duration}m • {movie.genres}
        </div>
        <div className="text-gray-200  mt-4 ml-2 text-left">{movie.desc}</div>
        <Link to={`/booking/${movie.id}`} className="no-underline">
          <button className="mt-7 mb-7 rounded-lg text-base flex items-center h-14 bg-red-700 hover:bg-red-600 px-6">
            <IconText iconName={"openmoji:ticket"} displayText={"BOOK TICKETS"} />
          </button>
        </Link>
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
