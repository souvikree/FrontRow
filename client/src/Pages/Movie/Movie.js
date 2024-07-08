import React, { useState, useEffect } from "react";
import axios from 'axios';
import MovieDetails from "./MovieDetails";
import CastDetails from "./CastDetails";
import { useParams } from "react-router-dom";

const Movie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/movies/${id}`);
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

    if (loading) {
        return <div className="text-white">Loading...</div>;
    }

    if (error || !movie) {
        return <div className="text-white">Movie not found</div>;
    }

    return (
        <div className="h-full w-full bg-black">
            <div className="min-h-[calc(100vh-160px)] px-[calc(3.5vw+5px)] pt-16 pl-24">
                <div key={movie.id} className="ml-8">
                    <MovieDetails movie={movie} />
                    <CastDetails movie={movie} />
                </div>
            </div>
        </div>
    );
};

export default Movie;
