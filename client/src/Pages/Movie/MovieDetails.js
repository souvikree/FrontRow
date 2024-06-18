import React, { useState } from 'react';


import 'font-awesome/css/font-awesome.min.css';

import Movielist from '../Data/Movielist';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Mute from '../Icons/Mute';
import Unmute from '../Icons/Unmute';
import { Icon } from '@iconify/react/dist/iconify.js';
import IconText from '../Icons/IconText';

const defaultMovie = {
    name: "Unknown",
    lang: "Unknown",
    duration: 0,
    desc: "No description available.",
    trailer: "",
    id: 0
};

const MovieDetails = (props) => {
    const [mute, setMute] = useState(true);
    const movie = props.movie || defaultMovie;

    return (
        <div className="flex flex-col md:flex-row mt-0 h-full w-full bg-[#0c111b] rounded-lg overflow-hidden ">
            <div className="w-full md:w-2/5 p-9 md:p-14 pt-10 px-[36px]    ">
                <h1 className="text-white text-3xl font-bold">
                    {movie.name}
                </h1>
                <div className="text-gray-400 text-base mt-6">
                    {movie.lang1} • {movie.duration}m • Movie
                </div>
                <div className="text-gray-200 text-lg mt-4 ml-2">
                    {movie.desc}
                </div>
                <Link to={'/booking/' + movie.id} className="no-underline">
                    <button className="mt-7 mb-7 rounded-lg text-base flex items-center h-14 bg-red-900 hover:bg-gray-300 px-6">
                    
                        {/* <img src="/images/ticket.png" alt="" className="mr-2" /> */}
                        <IconText iconName={"openmoji:ticket"} displayText={"BOOK TICKETS"} />
                        {/* <Icon icon="icon-park:tickets-two" />
                        <span>BOOK TICKETS</span> */}
                    </button>
                </Link>
            </div>
            <div className="w-full  relative">
                <ReactPlayer
                    id='MovieTrailer' 
                    url={movie.trailer} 
                    playing={true} 
                    loop={true} 
                    muted={mute} 
                    controls={false} 
                    width='100%' 
                    height='100%' 
                    className="absolute top-0 left-0 pointer-events-none" 
                />
                <button 
                    onClick={() => setMute(!mute)} 
                    className="absolute left-2 bottom-2 rounded-full p-2 bg-gray-200 hover:bg-gray-300"
                >
                    <img src={mute ? {Mute} : {Unmute}} alt="Unmute" />
                </button>
            </div>
        </div>
    );
};

export default MovieDetails;
