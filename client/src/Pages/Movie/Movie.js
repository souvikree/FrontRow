import React from "react";
import Movielist from "../Data/Movielist";
import MovieDetails from "./MovieDetails";
import CastDetails from "./CastDetails";
import { useParams } from "react-router-dom";

const Movie = () => {
    const { movie_id } = useParams();
    const selectedMovie = Movielist.find((movie) => movie.id === parseInt(movie_id));

    if (!selectedMovie) {
        return <div className="text-white">Movie not found</div>;
    }

    return (
        <div className="h-full w-full bg-black">
            <div className="min-h-[calc(100vh-160px)] px-[calc(3.5vw+5px)] pt-16 pl-24">
                <div key={selectedMovie.id} className="ml-8">
                    <MovieDetails movie={selectedMovie} />
                    <CastDetails movie={selectedMovie} />
                </div>
            </div>
        </div>
    );
};

export default Movie;
