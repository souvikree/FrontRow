// MoviePage.js
import React, { useState, useEffect } from 'react';
import CastDetails from './CastDetails';

const MoviePage = () => {
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        // Simulate a data fetch
        setTimeout(() => {
            setMovieData({
                cast1: "Actor 1",
                cast1Img: "https://via.placeholder.com/150",
                cast2: "Actor 2",
                cast2Img: "https://via.placeholder.com/150",
                cast3: "Actor 3",
                cast3Img: "https://via.placeholder.com/150",
            });
        }, 1000);
    }, []);

    if (!movieData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Movie Title</h1>
            <CastDetails movie={movieData} />
        </div>
    );
};

export default MoviePage;
