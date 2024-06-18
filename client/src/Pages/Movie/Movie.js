import React from 'react';
import MovieDetails from './MovieDetails.js';
// import ScreeningDetails from './screening_details/screening_details';
import { useParams } from 'react-router-dom';

import Movielist from '../Data/Movielist.js';

function setZoom() {
    if (navigator.appVersion.indexOf("Win") !== -1) {
        document.body.style.zoom = "90%";
    }
}

const Movie = () => {
    const { movie_id } = useParams();
    setZoom();
    return (
        <div className='w-full h-full flex'>
        <div className='h-full '>
            <div className="min-h-[calc(100vh-160px)] px-[calc(3.5vw+5px)] pt-12">
                <MovieDetails movie={Movielist[movie_id - 1]} />
                {/* <ScreeningDetails movie={movieData[movie_id - 1]} /> */}
            </div>
        </div>
        </div>
    );
};

export default Movie;
